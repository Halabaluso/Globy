<template>
    <button class="btn btn-primary w-max my-5 hover:btn-secondary hover:text-white hover:-translate-y-2 duration-300" onclick="modal_restaurant.showModal()"><Icon name = "ph:plus-circle-bold"></Icon> New restaurant</button>
    <div v-if="restaurant.lenrestaurant > 0" class="flex flex-col">
        <div class="overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <th>Name & subname</th>
                        <th>Food</th>
                        <th>Open & close</th>
                        <th>Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="restaurant,i in restaurant.allRestaurants" :key="restaurant">
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle">
                                        <Icon name="ph:bowl-food-bold" size="3em" class="text-primary"/>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">{{ restaurant.name }}</div>
                                    <div class="text-sm opacity-50">{{ restaurant.subname }}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {{ restaurant.food }}
                            <br />
                            <span class="badge badge-ghost badge-sm">{{ restaurant.address }}</span>
                        </td>
                        <td>
                            {{ restaurant.openclock }}
                            <br />
                            <span class="badge badge-ghost badge-sm">{{ restaurant.closeclock }}</span>
                        </td>
                        <td class="flex flex-row">
                            <button @click="takeRestaurantData(i,restaurant)" onclick="modal_restaurant_delete.showModal()" class="btn btn-error m-1 hover:btn-secondary hover:text-white hover:-translate-y-2 duration-300">Delete</button>
                            <button @click="takeRestaurantData(i,restaurant)" onclick="modal_restaurant_modify.showModal()" class="btn btn-primary m-1 hover:btn-secondary hover:text-white hover:-translate-y-2 duration-300">Modify</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
    <div v-if="restaurant.lenrestaurant === 0">
        <div class="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Any restaurant was created.</span>
        </div>
    </div>
    <ModalRestaurant/>
    <ModalRestaurantModify/>
    <ModalRestaurantDelete/>
</template>

<script setup>
import ModalRestaurant from "../Modals/RestaurantModals/NewRestaurant.vue"
import ModalRestaurantModify from "../Modals/RestaurantModals/ModifyRestaurant.vue"
import ModalRestaurantDelete from "../Modals/RestaurantModals/DeleteRestaurantModal.vue"
import { restaurantStore } from "../../src/store/RestaurantStore"
import { LoadingStore } from "../../src/store/LoadingStore"
const loading = LoadingStore()
const restaurant = restaurantStore()

const data = reactive({
    loading: true
})
onMounted(async () => {
    loading.changeLoading()
    await takeAllInfo()
    loading.changeLoading()
})

const takeAllInfo = async () => {
    const data = await takeData()
    if(data !== false){
        takeLenData(data)
    }
}
const takeData = async () => {
    let data = await restaurant.getAllRestaurants("globy/restaurants")
    return data
}
const takeLenData = (object) => {
    let len = restaurant.takeObjectLen(object)
    return len
}
const takeRestaurantData = (id, object) => {
    restaurant.setRestaurant(id, object)
}

</script>

<style></style>