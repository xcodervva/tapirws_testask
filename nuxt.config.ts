// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@element-plus/nuxt'],
  css: ['@/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      apiBase: 'https://test-task-api.tapir.ws',
    },
  },
  typescript: {
    strict: true,
  },
});
