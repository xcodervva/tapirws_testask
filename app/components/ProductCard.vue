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

      <button
        type="button"
        class="product-card__favorite"
      >
        Добавить в избранное
      </button>
    </div>

    <div class="product-card__content">
      <h3 class="product-card__title">
        {{ product.name }}
      </h3>

      <div class="product-card__prices">
        <span class="product-card__price">
          {{ product.price }} ₽
        </span>

        <span class="product-card__price product-card__price--half">
          x2: {{ halfPrice }} ₽
        </span>
      </div>
    </div>
  </a>
</template>
