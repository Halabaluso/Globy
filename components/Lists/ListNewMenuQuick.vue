<template>
  <div v-if="menu.arrayMenusQuickStart.length > 0" class="overflow-x-auto my-5">
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
      <tr v-for="menu,i in menu.arrayMenusQuickStart" :key="menu">
        <th>{{ i+1 }} </th>
        <td>{{ menu.name }}</td>
        <td>{{ menu.subname }}</td>
        <td>
            <button @click="deleteMenu(i)" class="btn-error btn">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { MenuStore } from "../../src/store/MenuStore"
const menu = MenuStore()

const deleteMenu = (index) => {
    let newArray = []
    menu.arrayMenusQuickStart.forEach((element, i) => {
        if(index !== i){
            newArray.push(element)
        }
    })
    menu.arrayMenusQuickStart = newArray
}
</script>

<style>

</style>