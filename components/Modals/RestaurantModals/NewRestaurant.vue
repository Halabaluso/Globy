<template>
    <dialog id="modal_restaurant" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form @submit="createRestaurant($event)" method="dialog">
                <h3 class="font-bold text-lg">
                    <Icon name="ph:plus-circle-bold"></Icon> New restaurant
                </h3>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant Name</span>
                    </label>
                    <input v-model="data.name" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant Subname</span>
                    </label>
                    <input v-model="data.subname" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Type of food</span>
                    </label>
                    <input v-model="data.food" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant address</span>
                    </label>
                    <input v-model="data.address" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Resutaurant open</span>
                    </label>
                    <input v-model="data.openclock" type="text" placeholder="Type here"
                        class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant close</span>
                    </label>
                    <input v-model="data.closeclock" type="text" placeholder="Type here"
                        class="input input-bordered w-full" />
                </div>
                <button type="submit" class="btn btn-primary mt-5">
                    <Icon name="ph:plus-circle-bold"></Icon> Create restaurant
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
import { restaurantStore } from "../../../src/store/RestaurantStore"
const restaurant = restaurantStore()
const data = reactive({
    errormsg: false,
    truemsg: false,
    name: "McDonald",
    subname: "Franquicia hamburguesería",
    food: "Comida rápida",
    address: "Toda España",
    openclock: moment("12:00", "HH:mm").format("HH:mm:ss"),
    closeclock: moment("23:00", "HH:mm").format("HH:mm:ss")
})


const createRestaurant = async (e) => {
    const validate = validateForm()
    if (validate) {
        await pushRestaurant()
        await reloadRestaurants()
    }
}

const reloadRestaurants = async () => {
    const data = await restaurant.getAllRestaurants("globy/restaurants")
    if(data !== false){
        restaurant.takeObjectLen(data)
    }
    
}

const pushRestaurant = async () => {
    const string = "globy/restaurants"
    const object = {
        name: data.name,
        subname: data.subname,
        food: data.food,
        address: data.address,
        openclock: data.openclock,
        closeclock: data.closeclock
    }
    await restaurant.pushRestaurant(string, object)
}

const validateForm = () => {
    let booleanvalidation = true
    if (data.name.length < 2 || data.subname.length < 2 ||
        data.subname.length < 2 || data.food.length < 2 ||
        data.openclock.length < 2 || data.closeclock.length < 2) {
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