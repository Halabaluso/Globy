<template>
    <button class="btn btn-primary w-max my-5 hover:btn-secondary hover:text-white hover:-translate-y-2 duration-300" onclick="modal_Menu.showModal()"><Icon name = "ph:plus-circle-bold"></Icon> New Menu</button>
    <div v-if="Menu.lenMenu > 0 || restaurant.lenrestaurant > 0" class="flex flex-col">
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
                        <th>Restaurant</th>
                        <th>Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="Menu,i in Menu.allMenus" :key="Menu">
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
                                    <div class="font-bold">{{ Menu.name }}</div>
                                    <div class="text-sm opacity-50">{{ Menu.subname }}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {{ Menu.RestaurantID }}
                            <br />
                            <span class="badge badge-ghost badge-sm">{{ Menu.Restaurant }}</span>
                        </td>
                        <td class="flex flex-row">
                            <button @click="takeMenuData(i,Menu)" onclick="modal_Menu_delete.showModal()" class="btn btn-error m-1 hover:btn-secondary hover:text-white hover:-translate-y-2 duration-300">Delete</button>
                            <button @click="takeMenuData(i,Menu)" onclick="modal_Menu_modify.showModal()" class="btn btn-primary m-1 hover:btn-secondary hover:text-white hover:-translate-y-2 duration-300">Modify</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
    <div v-if="Menu.lenMenu === 0">
        <div class="alert alert-info my-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Any menu was created.</span>
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
    <ModalMenu/>
    <ModalMenuModify/>
    <ModalMenuDelete/>
</template>

<script setup>
import ModalMenu from "../Modals/MenuModals/NewMenu.vue"
import ModalMenuModify from "../Modals/MenuModals/ModifyMenu.vue"
import ModalMenuDelete from "../Modals/MenuModals/DeleteMenuModal.vue"
import { MenuStore } from "../../src/store/MenuStore"
import { restaurantStore } from "../../src/store/RestaurantStore"
const restaurant = restaurantStore()
const Menu = MenuStore()
const data = reactive({
    loading: true
})
onMounted(async () => {
    await takeAllInfo()
})

const takeAllInfo = async () => {
    const data = await takeData()
    if(data !== false){
        takeLenData(data)
    }
}
const takeData = async () => {
    let data = await Menu.getAllMenus("globy/Menus")
    return data
}
const takeLenData = (object) => {
    let len = Menu.takeObjectLen(object)
    return len
}
const takeMenuData = (id, object) => {
    Menu.setMenu(id, object)
}

</script>

<style></style>