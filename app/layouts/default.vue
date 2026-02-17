<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.layout__content {
  min-height: calc(100vh - 460px);
  padding: 16px;
}
</style>
