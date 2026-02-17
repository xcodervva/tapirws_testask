import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Product } from 'types/Product';
import type { ProductsResponse } from 'types/ProductsResponse';
import { useProducts } from 'composables/useProducts';

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(1);
  const limit = ref<number>(12);
  const loading = ref<boolean>(false);
  const error = ref<boolean>(false);

  const hasNextPage = computed<boolean>(() => {
    return currentPage.value < totalPages.value;
  });

  const setInitialData = (response: ProductsResponse): void => {
    products.value = response.products;
    currentPage.value = response.currentPage;
    totalPages.value = response.totalPages;
    limit.value = response.limit;
  };

  const fetchNextPage = async (): Promise<void> => {
    if (!hasNextPage.value || loading.value) {
      return;
    }

    const { fetchProducts } = useProducts();

    loading.value = true;
    error.value = false;

    try {
      const nextPage = currentPage.value + 1;

      const response = await fetchProducts(nextPage, limit.value);

      products.value = [...products.value, ...response.products];
      currentPage.value = response.currentPage;
      totalPages.value = response.totalPages;
    } catch (e) {
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  const retry = async (): Promise<void> => {
    error.value = false;
    await fetchNextPage();
  };

  return {
    products,
    currentPage,
    totalPages,
    limit,
    loading,
    error,
    hasNextPage,
    setInitialData,
    fetchNextPage,
    retry,
  };
});
