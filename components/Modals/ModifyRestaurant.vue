<template>
    <dialog id="modal_restaurant_modify" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form @submit="createRestaurant($event)" method="dialog">
                <h3 class="font-bold text-lg">
                    <Icon name="ph:plus-circle-bold"></Icon> Modify restaurant
                </h3>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant Name</span>
                    </label>
                    <input v-model="restaurant.restaurant.name" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant Subname</span>
                    </label>
                    <input v-model="restaurant.restaurant.subname" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Type of food</span>
                    </label>
                    <input v-model="restaurant.restaurant.food" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant address</span>
                    </label>
                    <input v-model="restaurant.restaurant.address" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Resutaurant open</span>
                    </label>
                    <input v-model="restaurant.restaurant.openclock" type="text" placeholder="Type here"
                        class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant close</span>
                    </label>
                    <input v-model="restaurant.restaurant.closeclock" type="text" placeholder="Type here"
                        class="input input-bordered w-full" />
                </div>
                <button type="submit" class="btn btn-primary mt-5">
                    <Icon name="ph:plus-circle-bold"></Icon> Modify restaurant
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
            <span>Restaurante no creado, rellene todos los campos.</span>
        </div>
    </div>
    <div v-if="data.truemsg" class="toast">
        <div class="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Restaurante creado con éxito.</span>
        </div>
    </div>
</template>

<script setup>
import moment from "moment"
import { restaurantStore } from "../../src/store/RestaurantStore"
const restaurant = restaurantStore()
const data = reactive({
    errormsg: false,
    truemsg: false,
})

const createRestaurant = async (e) => {
    const validate = validateForm()
    if (validate) {
        await pushRestaurant()
        await reloadRestaurants()
    }
}

const reloadRestaurants = async () => {
    await restaurant.getAllRestaurants("globy/restaurants")
}

const pushRestaurant = async () => {
    const string = "globy/restaurants/" + restaurant.restaurantid 
    const object = restaurant.restaurant
    await restaurant.modifyRestaurant(string, object)
}

const validateForm = () => {
    let booleanvalidation = true
    if (restaurant.restaurant.name.length < 2 || restaurant.restaurant.subname.length < 2 ||
        restaurant.restaurant.address.length < 2 || restaurant.restaurant.food.length < 2 ||
        restaurant.restaurant.openclock.length < 2 || restaurant.restaurant.closeclock.length < 2) {
        data.errormsg = true
        booleanvalidation = false
        setTimeout(() => {
            data.errormsg = false
        }, 2500)
    }else{
        data.truemsgmsg = true
        booleanvalidation = true
        setTimeout(() => {
            data.truemsg = false
        }, 2500)
    }

    return booleanvalidation
}
</script>

<style></style>