import { useRuntimeConfig } from 'nuxt/app';
import type { ProductsResponse } from '@/types/ProductsResponse';

export const useProducts = () => {
  const config = useRuntimeConfig();

  const fetchProducts = async (
    page: number,
    limit = 12,
  ): Promise<ProductsResponse> => {
    const response = await $fetch<ProductsResponse>(
      `${config.public.apiBase}/products`,
      {
        query: {
          page,
          limit,
        },
      },
    );

    return response;
  };

  return {
    fetchProducts,
  };
};
