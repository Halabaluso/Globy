<template>
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <div class="mb-10 flex flex-row items-center p-2 rounded shadow border">
        <img src="../../src/img/logo.png" alt="Globy logo" class="w-24">
        <p class="text-2xl font-bold">Globy</p>
        </div>
        <li><router-link to = "/">Restaurants</router-link></li>
        <li><router-link to = "/menu">Menus</router-link></li>
        <li><a>Dishes</a></li>
        <li><a>Promotions</a></li>
      </ul>
</template>

<script>

</script>

<style>

</style>