<template>
    <dialog id="modal_sure_quickresume" class="modal">
        <div class="modal-box">
            <div class="py-4">
                <div class="flex flex-row items-center">
                    <div>
                        <client-only>
                            <Vue3Lottie :animationData="json" :height="200" :noMargin="true" :width="200"/>
                        </client-only>
                    </div>
                    <div class="p-5">
                        <h3 class="font-bold text-2xl bg-primary p-1 rounded w-max">The food is ready!</h3>
                        <p>Let's taste the food before serving it on the table.</p>
                    </div>
                </div>
                <div>
                    <div class="collapse collapse-plus bg-base-200 shadow border my-2">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div class="collapse-title font-bold">
                            Restaurant
                        </div>
                        <div class="collapse-content">
                            <p class="bg-secondary p-1 rounded w-max text-sm font-bold">{{restaurant.restaurant.name}} </p>
                            <p class="text-sm">{{restaurant.restaurant.subname}} </p>
                        </div>
                    </div>
                    <div class="collapse collapse-plus bg-base-200 shadow border my-2">
                        <input type="radio" name="my-accordion-3" />
                        <div class="collapse-title font-bold">
                            Menus of {{restaurant.restaurant.name}}
                        </div>
                        <div class="collapse-content">
                            <div v-for="menu in menu.arrayMenusQuickStart" :key = "menu" class="text-sm my-2">
                                <p class="bg-secondary p-1 rounded w-max font-bold">{{menu.name}} </p>
                                <p>{{menu.subname}} </p>
                            </div>
                        </div>
                    </div>
                    <div class="collapse collapse-plus bg-base-200 shadow border my-2">
                        <input type="radio" name="my-accordion-3" />
                        <div class="collapse-title font-bold">
                            All dishes
                        </div>
                        <div class="collapse-content">
                            <div v-for="dish in dish.arrayDishsQuickStart" :key = "dish" class="text-sm my-2">
                                <p class="bg-secondary p-1 rounded w-max font-bold">{{dish.name}} </p>
                                <p>{{dish.subname}} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Cancel</button>
                <button @click="pushData" class="btn btn-primary ml-2">Serve plate!</button>
            </form>
    </div>
        </div>
    </dialog>
</template>

<script setup>
import { json1 } from "../../../src/gifs/GifJson"
import { restaurantStore } from "../../../src/store/RestaurantStore"
import { MenuStore } from "../../../src/store/MenuStore"
import { DishStore } from "../../../src/store/DishStore"
const json = json1
const restaurant = restaurantStore()
const menu = MenuStore()
const dish = DishStore()

const pushData = async () => {
    const data = await restaurant.pushRestaurantId("globy/restaurants",restaurant.restaurant)
    takeRealIdRestaurantAndPushMenuObject(data)
    await pushMenuRestaurant()
    pushDishRestaurant()
}


const pushDishRestaurant = async (id) => {
    for (const element of dish.arrayDishsQuickStart) {
        await dish.pushDish("globy/Dishs", element)
    }
}


const pushMenuRestaurant = async () => {
    let index = 0
    for (const element of menu.arrayMenusQuickStart) {
        const data = await menu.pushMenuId("globy/Menus", element)
        takeRealIdMenuAndPushDishObject(data, index)
        index = index + 1
    }
}

const takeRealIdMenuAndPushDishObject = (id, i) => {
    dish.arrayDishsQuickStart.forEach(async element => {
        if(parseInt(i) === parseInt(element.indexMenu)){
            element.menuId = await id
        }
    })
}

const takeRealIdRestaurantAndPushMenuObject = (id) => {
    menu.arrayMenusQuickStart.forEach(element => {
        element.restaurantId = id
    })
}
</script>

<style></style>