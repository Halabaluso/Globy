<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <HeaderComponent/>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
    <div class="drawer-side">
      <MenuComponent/>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "./components/Header&Menu/HeaderComponent.vue"
import MenuComponent from "./components/Header&Menu/MenuComponent.vue"
import 'vue-loading-overlay/dist/css/index.css';
</script>

<style></style>
