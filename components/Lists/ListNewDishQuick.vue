<template>
  <div v-if="Dish.arrayDishsQuickStart.length > 0" class="overflow-x-auto my-5">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Subname</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr v-for="Dish,i in Dish.arrayDishsQuickStart" :key="Dish">
        <th>{{ i+1 }} </th>
        <td>{{ Dish.name }}</td>
        <td>{{ Dish.subname }}</td>
        <td>
            <button @click="deleteDish(i)" class="btn-error btn">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { DishStore } from "../../src/store/DishStore"
const Dish = DishStore()

const deleteDish = (index) => {
    let newArray = []
    Dish.arrayDishsQuickStart.forEach((element, i) => {
        if(index !== i){
            newArray.push(element)
        }
    })
    Dish.arrayDishsQuickStart = newArray
}
</script>

<style>

</style>