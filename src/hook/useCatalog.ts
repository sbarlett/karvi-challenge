import { ITEMS_PER_PAGE } from "@/constants";
import { listImageCar, mockCarsCatalog } from "@/mock";
import { CatalogCars } from "@/models";
import { getFilterWithCount } from "@/utils/getFilterWithCount";
import { useCallback, useEffect, useMemo, useState } from "react";

const useCatalog = (filters: string[], order: string) => {
  const [page, setPage] = useState<number>(1);

  const data = mockCarsCatalog.items;
  const imagesList = listImageCar;

  const adapterData = useMemo(() => {
    return data.map((car) => ({
      ...car,
      fav: false,
      images: imagesList || [],
    }));
  }, [data, imagesList]);

  const [catalog, setCatalog] = useState<CatalogCars[]>(() => {
    const storage = localStorage.getItem("catalog");
    return storage ? JSON.parse(storage) : adapterData;
  });

  useEffect(() => {
    localStorage.setItem("catalog", JSON.stringify(catalog));
  }, [catalog]);

  const toggleFavorite = useCallback(
    (id: number) => {
      const updatedCatalog = catalog.map((car) => {
        if (car.id === id) {
          return { ...car, fav: !car.fav };
        }
        return car;
      });
      setCatalog(updatedCatalog);
    },
    [catalog]
  );

  const filteredData = useMemo(() => {
    return catalog.filter((car) => {
      return filters.some((filter) => {
        return (
          car.brand.toLowerCase() === filter.toLowerCase() ||
          car.model.toLowerCase() === filter.toLowerCase() ||
          car.version.toLowerCase() === filter.toLowerCase() ||
          car.city.toLowerCase() === filter.toLowerCase() ||
          car.year.toString() === filter.toLowerCase()
        );
      });
    });
  }, [catalog, filters]);

  const dataFiltered = filters.length === 0 ? catalog : filteredData;

  const sortedData = useMemo(() => {
    return dataFiltered.sort((a, b) => {
      if (order === "max") return b.price - a.price;
      if (order === "min") return a.price - b.price;
      if (order === "relevant") return Number(b.fav) - Number(a.fav);
      return 0;
    });
  }, [dataFiltered, order]);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  const paginatedData = sortedData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const catalogFavorite = useMemo(
    () => catalog.filter((car) => car.fav === true),
    [data]
  );

  const adapterAvailableFilters = useMemo(() => {
    return getFilterWithCount({
      filters: mockCarsCatalog.availableFilters,
      items: mockCarsCatalog.items,
    });
  }, [mockCarsCatalog.availableFilters, mockCarsCatalog.items]);

  return {
    data: paginatedData as CatalogCars[],
    dataFavorites: catalogFavorite,
    pagination: {
      totalPages: Math.ceil(sortedData.length / ITEMS_PER_PAGE) || 0,
      totalItems: sortedData.length || 0,
      page,
      setPage,
    },
    availableFilters: adapterAvailableFilters,
    toggleFavorite,
  };
};

export default useCatalog;
