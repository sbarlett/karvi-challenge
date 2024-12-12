import { mockData } from "@/mock/mockData";
import { CatalogCars } from "@/models";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const ITEMS_PER_PAGE = 12;

const useCatalog = (filters: string[], order: string) => {
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ["home", page, filters, order],
    queryFn: async () => {
      const data = mockData.items;

      const filteredData = data.filter((car) => {
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

      const dataFiltered = filters.length === 0 ? data : filteredData;

      const sortedData = dataFiltered.sort((a, b) => {
        if (order === "max") return b.price - a.price;
        if (order === "min") return a.price - b.price;
        return 0;
      });

      const startIndex = (page - 1) * ITEMS_PER_PAGE;
      const paginatedData = sortedData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
      );

      return {
        paginatedData,
        totalPages: Math.ceil(sortedData.length / ITEMS_PER_PAGE),
        totalItems: sortedData.length,
      };
    },
  });

  return {
    data: data?.paginatedData as CatalogCars[],
    pagination: {
      totalPages: data?.totalPages || 0,
      totalItems: data?.totalItems || 0,
      page,
      setPage,
    },
    availableFilters: mockData.availableFilters,
  };
};

export default useCatalog;
