<template>
    <dialog id="modal_Menu" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form @submit="createMenu($event)" method="dialog">
                <h3 class="font-bold text-lg">
                    <Icon name="ph:plus-circle-bold"></Icon> New Menu
                </h3>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Menu Name</span>
                    </label>
                    <input v-model="data.name" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Menu Subname</span>
                    </label>
                    <input v-model="data.subname" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant from</span>
                    </label>
                    <select @change="takeRestaurantValues($event)" class="select select-bordered w-full">
                        <option selected disable>Select a restaurant</option>
                        <option v-for="restaurant,i in restaurants.allRestaurants" :key="restaurant" :value="i">{{ restaurant.name }} </option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary mt-5">
                    <Icon name="ph:plus-circle-bold"></Icon> Create Menu
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
            <span>Menu was not created.</span>
        </div>
    </div>
    <div v-if="data.truemsg" class="toast">
        <div class="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Menu was created.</span>
        </div>
    </div>
</template>

<script setup>
import moment from "moment"
import { MenuStore } from "../../../src/store/MenuStore"
import { restaurantStore } from "../../../src/store/RestaurantStore"
const restaurants = restaurantStore()
const Menu = MenuStore()
const data = reactive({
    errormsg: false,
    truemsg: false,
    name: "Entrantes",
    subname: "Entrantes para compartir",
    restaurantId: "",
    restaurantName: ""
})


const createMenu = async (e) => {
    const validate = validateForm()
    if (validate) {
        await pushMenu()
        await reloadMenus()
    }
}

const reloadMenus = async () => {
    const data = await Menu.getAllMenus("globy/Menus")
    if (data !== false) {
        Menu.takeObjectLen(data)
    }

}

const pushMenu = async () => {
    const string = "globy/Menus"
    const object = {
        name: data.name,
        subname: data.subname,
        restaurantId: data.restaurantId,
        restaurantName: data.restaurantName
    }
    await Menu.pushMenu(string, object)
}

const validateForm = () => {
    let booleanvalidation = true
    if (data.name.length < 2 || data.subname.length < 2 ||
        data.restaurantId.length < 2  || data.restaurantName.length < 2) {
        data.errormsg = true
        booleanvalidation = false
        setTimeout(() => {
            data.errormsg = false
        }, 2500)
    } else {
        data.truemsgmsg = true
        booleanvalidation = true
        setTimeout(() => {
            data.truemsg = false
        }, 2500)
    }

    return booleanvalidation
}

const takeRestaurantValues = (e) => {
    data.restaurantName =  restaurants.allRestaurants[e.target.value].name
    data.restaurantId = e.target.value
}
</script>

<style></style>