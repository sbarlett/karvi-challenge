export interface FilterOption {
  id: number | string;
  name: string | number;
  slug?: string;
  brand?: string;
}

export interface Image {
  id: number;
  image_url: string;
}

export interface CatalogCars {
  id: number;
  city: string;
  year: number;
  brand: string;
  model: string;
  version: string;
  price: number;
  mileage: number;
  fav?: boolean;
  images?: Image[];
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

export interface PaginationType {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  totalItems: number;
}
