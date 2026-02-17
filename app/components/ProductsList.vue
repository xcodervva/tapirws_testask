<script setup lang="ts">
import type { Product } from '~/types/Product';
import ProductCard from '~/components/ProductCard.vue';

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="products-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>