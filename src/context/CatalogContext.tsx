import useCatalog from "@/hook/useCatalog";
import { CatalogCars, Filters } from "@/models";
import { FormValues } from "@/schema";
import React, { createContext, ReactNode, useContext } from "react";
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
  setPage: (page: number) => void;
}

const CatalogContext = createContext<CatalogContextProps | undefined>(
  undefined
);

export const CatalogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { watch } = useFormContext<FormValues>();

  const filters = watch("filters");
  const order = watch("order");

  const { data, pagination, availableFilters, toggleFavorite, dataFavorites } =
    useCatalog(filters, order);

  return (
    <CatalogContext.Provider
      value={{
        data,
        dataFavorites: dataFavorites,
        pagination,
        availableFilters,
        toggleFavorite,
        setPage: pagination.setPage,
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
