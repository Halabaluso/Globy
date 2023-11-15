<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <HeaderComponent/>
      <NuxtLayout>
        <HeaderWelcome/>
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
import HeaderWelcome from "./components/Header&Menu/WelcomeHead.vue"
import 'vue-loading-overlay/dist/css/index.css';
let colorMode = useColorMode();
colorMode.preference = "bumblebee"
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
