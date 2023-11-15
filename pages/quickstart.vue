<template>
    <div class="m-5">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a>Home</a></li>
          <li><a>Quick Start</a></li>
        </ul>
      </div>
      <FormNewRestaurant/>
      <FormNewMenu/>
      <FormNewDish/>
    </div>
  </template>
  
  <script setup>
  import FormNewRestaurant from "../components/Forms/NewRestaurant.vue"
  import FormNewMenu from "../components/Forms/NewMenu.vue"
  import FormNewDish from "../components/Forms/NewDish"
  import { restaurantStore } from "../src/store/RestaurantStore"
  import { MenuStore } from "../src/store/MenuStore"
  import { LoadingStore } from "../../src/store/LoadingStore"
  const loading = LoadingStore()
  const restaurant = restaurantStore()
  const menu = MenuStore()
  onBeforeUnmount(() => {
    restaurant.booleanquickcomplete = false
    menu.booleanquickcomplete = false
    menu.arrayMenusQuickStart = false
  })

  </script>
  
  <style></style>