interface FilterOption {
  id: number | string;
  name: string | number;
  slug?: string;
  brand?: string;
}

export interface CatalogCars {
  id?: number;
  city: string;
  year: number;
  brand: string;
  model: string;
  version: string;
  price: number;
  mileage: number;
}

export interface Data {
  availableFilters: Filters;
  items: CatalogCars[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}


export interface Filters {
  year: FilterOption[];
  city: FilterOption[];
  brand: FilterOption[];
  model: FilterOption[];
  version: FilterOption[];
}

export interface Pagination {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  totalItems: number;
}
