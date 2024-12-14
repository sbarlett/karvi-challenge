import useCatalog from "@/hook/useCatalog";
import { CatalogCars, Filters } from "@/models";
import React, { createContext, ReactNode, useContext, useMemo } from "react";
import { useFormContext } from "react-hook-form";

interface CatalogContextProps {
  data: CatalogCars[];
  dataFavorites: CatalogCars[];
  pagination: {
    totalPages: number;
    totalItems: number;
    page: number;
    setPage: (page: number) => void;
  };
  availableFilters: Filters;
  toggleFavorite: (id: number) => void;
}

const CatalogContext = createContext<CatalogContextProps | undefined>(
  undefined
);

export const CatalogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { watch } = useFormContext();

  const filters = watch("filters");
  const order = watch("order");

  const { data, pagination, availableFilters, toggleFavorite } = useCatalog(
    filters,
    order
  );

  const catalogFavorite = useMemo(
    () => data.filter((car) => car.fav === true),
    [data]
  );

  return (
    <CatalogContext.Provider
      value={{
        data,
        dataFavorites: catalogFavorite,
        pagination,
        availableFilters,
        toggleFavorite,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalogContext = () => {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error("useCatalogContext must be used within a CatalogProvider");
  }
  return context;
};
