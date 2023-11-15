<template>
    <button v-if="restaurant.lenrestaurant > 0" class="btn btn-primary w-max my-5 hover:btn-secondary hover:text-white hover:-translate-y-2 duration-300" onclick="modal_Promotion.showModal()"><Icon name = "ph:plus-circle-bold"></Icon> New Promotion</button>
    <div v-if="Promotion.lenPromotion > 0 && restaurant.lenrestaurant > 0" class="flex flex-col">
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
                        <th>Restaurant promotion</th>
                        <th>Discount</th>
                        <th>Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="Promotion,i in Promotion.allPromotions" :key="Promotion">
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle">
                                        <Icon name="ph:fork-knife-bold" size="3em" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">{{ Promotion.name }}</div>
                                    <div class="text-sm opacity-50">{{ Promotion.subname }}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {{ Promotion.restaurantName }}
                            <br />
                            <span class="badge badge-ghost badge-sm">{{ Promotion.restaurantId }}</span>
                        </td>
                        <td>
                            <p>{{ Promotion.price }}%</p>
                        </td>
                        <td class="flex flex-row">
                            <button @click="takePromotionData(i,Promotion)" onclick="modal_Promotion_delete.showModal()" class="btn btn-error m-1 hover:btn-secondary hover:text-white hover:-translate-y-2 duration-300">Delete</button>
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
            <button class="btn w-max my-5 hover:shadow hover:-translate-y-2 duration-300" onclick="modal_restaurant.showModal()"><Icon name = "ph:plus-circle-bold"></Icon> New restaurant</button>
        </div>
    </div>
    <div v-if="Promotion.lenPromotion === 0 && restaurant.lenrestaurant > 0 ">
        <div class="alert alert-info my-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Any Promotion was created.</span>
        </div>
    </div>
    <ModalPromotion/>
    <ModalPromotionDelete/>
    <!--
    <ModalPromotionModify/>
    <Modalrestaurant/>
    -->
    
</template>

<script setup>
import ModalPromotion from "../Modals/PromotionModals/NewPromotion.vue"
//import ModalPromotionModify from "../Modals/PromotionModals/ModifyPromotion.vue"
import ModalPromotionDelete from "../Modals/PromotionModals/DeletePromotionModal.vue"
//import Modalrestaurant from "../Modals/restaurantModals/Newrestaurant.vue"
import { PromotionStore } from "../../src/store/PromotionStore"
import { restaurantStore } from "../../src/store/RestaurantStore"
const restaurant = restaurantStore()
const Promotion = PromotionStore()
const data = reactive({
    loading: true
})
onMounted(async () => {
    await takeAllInfo()
})

const takeAllInfo = async () => {
    console.log("Pasa :D")
    const data = await takeDataPromotions()
    if(data !== false){
        takeLenDataPromotion(data)
    }

    const data2 = await takeDatarestaurants()
    if(data2 !== false){
        takeLenDatarestaurant(data2)
    }
}
const takeDataPromotions = async () => {
    let data = await Promotion.getAllPromotions("globy/Promotions")
    return data
}

const takeDatarestaurants = async () => {
    const restaurantlen = restaurant.lenrestaurant
    let data = false
    if(restaurantlen === 0){
        data = await restaurant.getAllRestaurants("globy/restaurants")
    }
    return data
}
const takeLenDataPromotion = (object) => {
    let len = Promotion.takeObjectLen(object)
    return len
}
const takeLenDatarestaurant = (object) => {
    let len = restaurant.takeObjectLen(object)
    return len 
}
const takePromotionData = (id, object) => {
    Promotion.setPromotion(id, object)
}

</script>

<style></style>