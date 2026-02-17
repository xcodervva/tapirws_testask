<script setup lang="ts">
import { computed } from 'vue';
import type { Product } from '~/types/Product';

const props = defineProps<{
  product: Product;
}>();

const halfPrice = computed<number>(() => {
  return Math.ceil(props.product.price / 2);
});
</script>

<template>
  <a
    href="#"
    class="product-card"
  >
    <div class="product-card__image-wrapper">
      <img
        :src="product.image"
        :alt="product.name"
        class="product-card__image"
      />

      <img src="/favorite.png" class="favorite" alt="Добавить в избранное" />
    </div>

    <div class="product-card__content">
      <div class="product-card__prices">
        <span class="product-card__price">
          {{ product.price }} ₽
        </span>

        <span class="product-card__price--half">
          x2: {{ halfPrice }} ₽
        </span>
      </div>
      
      <div class="product-card__title">
        {{ product.name }}
      </div>

    </div>
  </a>
</template>
