<script setup lang="ts">
import { ref } from 'vue';

import type { CatalogData } from '~/types/CatalogData';

const catalogData = ref<CatalogData[]>([
  {
    id: 'catalog',
    text: 'Каталог',
  },
  {
    id: 'all_brends',
    text: 'Все бренды',
  },
  {
    id: 'nike',
    text: 'Nike',
  },
  {
    id: 'adidas',
    text: 'Adidas',
  },
]);
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <nav class="footer__nav">
        <div class="column">
          <a href="#" 
          :class="[{ title: idx === 0 }, 'footer__link']" v-for="(catalog, idx) in catalogData" :key="catalog.id">
          {{ catalog.text }}</a>
        </div>

        <div class="column">
          <a href="#" class="footer__link title">Помощь</a>
          <a href="#" class="footer__link">Доставка</a>
          <a href="#" class="footer__link">Заказ и оплата</a>
          <a href="#" class="footer__link">Обмен и возврат</a>
          <a href="#" class="footer__link">F.A.Q.</a>
        </div>

        <div class="column">
          <a href="#" class="footer__link title">Помощь</a>
          <a href="#" class="footer__link">Доставка</a>
          <a href="#" class="footer__link">Заказ и оплата</a>
          <a href="#" class="footer__link">Обмен и возврат</a>
          <a href="#" class="footer__link">F.A.Q.</a>
        </div>
      </nav>
    </div>
  </footer>
</template>