<template>
    <dialog id="modal_Promotion" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form @submit="createPromotion($event)" method="dialog">
                <h3 class="font-bold text-lg">
                    <Icon name="ph:plus-circle-bold"></Icon> New Promotion
                </h3>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Promotion Name</span>
                    </label>
                    <input v-model="data.name" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Promotion Subname</span>
                    </label>
                    <input v-model="data.subname" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Promotion Discount in %</span>
                    </label>
                    <input v-model="data.price" type="number" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">restaurant from</span>
                    </label>
                    <select @change="takerestaurantValues($event)" class="select select-bordered w-full">
                        <option selected disable>Select a restaurant</option>
                        <option v-for="restaurant,i in restaurants.allRestaurants" :key="restaurant" :value="i">{{ restaurant.name }} </option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary mt-5">
                    <Icon name="ph:plus-circle-bold"></Icon> Create Promotion
                </button>
            </form>
        </div>
    </dialog>
    <div v-if="data.errormsg" class="toast">
        <div class="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Promotion was not created.</span>
        </div>
    </div>
    <div v-if="data.truemsg" class="toast">
        <div class="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Promotion was created.</span>
        </div>
    </div>
</template>

<script setup>
import moment from "moment"
import { PromotionStore } from "../../../src/store/PromotionStore"
import { restaurantStore } from "../../../src/store/RestaurantStore"
const restaurants = restaurantStore()
const Promotion = PromotionStore()
const data = reactive({
    errormsg: false,
    truemsg: false,
    name: "Summer promotion",
    subname: "No summer, no life",
    price: 0,
    restaurantId: "",
    restaurantName: ""
})


const createPromotion = async (e) => {
    const validate = validateForm()
    if (validate) {
        await pushPromotion()
        await reloadPromotions()
    }
}

const reloadPromotions = async () => {
    const data = await Promotion.getAllPromotions("globy/Promotions")
    if (data !== false) {
        Promotion.takeObjectLen(data)
    }

}

const pushPromotion = async () => {
    const string = "globy/Promotions"
    const object = {
        name: data.name,
        subname: data.subname,
        restaurantId: data.restaurantId,
        restaurantName: data.restaurantName,
        price: data.price
    }
    await Promotion.pushPromotion(string, object)
}

const validateForm = () => {
    let booleanvalidation = true
    if (data.name.length < 2 || data.subname.length < 2 ||
        data.restaurantId.length < 2  || data.restaurantName.length < 2 || data.price < 0 || data.price === null) {
        data.errormsg = true
        booleanvalidation = false
        setTimeout(() => {
            data.errormsg = false
        }, 2500)
    } else {
        data.truemsg = true
        booleanvalidation = true
        setTimeout(() => {
            data.truemsg = false
        }, 2500)
    }

    return booleanvalidation
}

const takerestaurantValues = (e) => {
    data.restaurantName =  restaurants.allRestaurants[e.target.value].name
    data.restaurantId = e.target.value
}
</script>

<style></style>