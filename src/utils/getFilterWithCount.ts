import { CatalogCars, FilterOption, Filters } from "@/models";

export const getFilterWithCount = ({
  filters,
  items,
}: {
  filters: Filters;
  items: CatalogCars[];
}): Filters => {

  const countItems = (
    filterKey: keyof Filters,
    filterValue: string | number
  ) => {
    return items.filter((item) => item[filterKey] === filterValue).length;
  };

  const addCountToFilters = (
    filters: FilterOption[],
    filterKey: keyof Filters
  ) => {
    return filters.map((filter) => ({
      ...filter,
      count: countItems(filterKey, filter.id),
    }));
  };

  return {
    year: addCountToFilters(filters.year, "year"),
    city: addCountToFilters(filters.city, "city"),
    brand: addCountToFilters(filters.brand, "brand"),
    model: addCountToFilters(filters.model, "model"),
    version: addCountToFilters(filters.version, "version"),
  };
};
