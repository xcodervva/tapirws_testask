import type { Product } from "./Product";

export interface ProductsResponse {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  products: Product[];
}