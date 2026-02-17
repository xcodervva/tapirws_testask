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

const helpData = ref<CatalogData[]>([
  {
    id: 'help',
    text: 'Помощь',
  },
  {
    id: 'delivery',
    text: 'Доставка',
  },
  {
    id: 'order',
    text: 'Заказ и оплата',
  },
  {
    id: 'exchange',
    text: 'Обмен и возврат',
  },
  {
    id: 'faq',
    text: 'F.A.Q.',
  },
]);

const infoData = ref<CatalogData[]>([
  {
    id: 'info',
    text: 'Информация',
  },
  {
    id: 'prefer',
    text: 'Преимущества',
  },
  {
    id: 'guarantees',
    text: 'Гарантия и безопасность',
  },
  {
    id: 'individual',
    text: 'Индивидуальный заказ',
  },
  {
    id: 'promotions',
    text: 'Акции',
  },
]);

const companyData = ref<CatalogData[]>([
  {
    id: 'company',
    text: 'Компания',
  },
  {
    id: 'about',
    text: 'О нас',
  },
  {
    id: 'guarantees',
    text: 'Гарантия и безопасность',
  },
  {
    id: 'blog',
    text: 'Блог',
  },
  {
    id: 'reviews',
    text: 'Отзывы',
  },
  {
    id: 'contacts',
    text: 'Контакты',
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
          <a href="#"
            :class="[{ title: idx === 0 }, 'footer__link']" v-for="(help, idx) in helpData" :key="help.id">
            {{ help.text }}</a>
        </div>

        <div class="column">
            <a href="#"
            :class="[{ title: idx === 0 }, 'footer__link']" v-for="(info, idx) in infoData" :key="info.id">
            {{ info.text }}</a>
        </div>

        <div class="column">
            <a href="#"
            :class="[{ title: idx === 0 }, 'footer__link']" v-for="(company, idx) in companyData" :key="company.id">
            {{ company.text }}</a>
        </div>
      </nav>
    </div>
  </footer>
</template>