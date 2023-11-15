<template>
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <div class="mb-10 flex flex-row items-center">
        <img src="../../src/img/logo.png" alt="Globy logo" class="w-24">
        <p class="text-2xl font-bold">Globy</p>
        </div>
        <li class="bg-primary rounded hover:bg-secondary duration-300 hover:-translate-y-2 font-bold"><router-link to = "/quickstart"><Icon name = "ph:magic-wand-bold" size = "1.8em"></Icon>Quick Start</router-link></li>
        <li class="hover:bg-gray-200 duration-300 hover:-translate-y-2 font-bold"><router-link to = "/"><Icon name = "ph:bowl-food-bold" size = "1.8em" class="text-secondary"></Icon>Restaurants</router-link></li>
        <li class="hover:bg-gray-200 duration-300 hover:-translate-y-2 font-bold"><router-link to = "/menu"><Icon name = "ph:fork-knife-bold" size = "1.8em" class="text-secondary"></Icon> Menus</router-link></li>
        <li class="hover:bg-gray-200 duration-300 hover:-translate-y-2 font-bold"><router-link to = "/dishes"><Icon name = "ph:egg-bold" size = "1.8em" class="text-secondary"></Icon> Dishes</router-link></li>
        <li class="hover:bg-gray-200 duration-300 hover:-translate-y-2 font-bold"><router-link to = "/promotions"><Icon name = "ph:sparkle-bold" size = "1.8em" class="text-secondary"></Icon> Promotions</router-link></li>
        <li class="font-bold opacity-50"><a><Icon name = "ph:bowl-food-bold" size = "1.8em" class="text-secondary"></Icon> Promotions (next update)</a></li>
      </ul>
</template>

<script>

</script>

<style>

</style>