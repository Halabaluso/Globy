<template>
    <button v-if="Menu.lenMenu > 0" class="btn btn-primary w-max my-5 hover:btn-secondary hover:text-white hover:-translate-y-2 duration-300" onclick="modal_Dish.showModal()"><Icon name = "ph:plus-circle-bold"></Icon> New Dish</button>
    <div v-if="Dish.lenDish > 0 && Menu.lenMenu > 0" class="flex flex-col">
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
                        <th>Menu</th>
                        <th>Price</th>
                        <th>Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="Dish,i in Dish.allDishs" :key="Dish">
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
                                    <div class="font-bold">{{ Dish.name }}</div>
                                    <div class="text-sm opacity-50">{{ Dish.subname }}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {{ Dish.MenuName }}
                            <br />
                            <span class="badge badge-ghost badge-sm">{{ Dish.MenuId }}</span>
                        </td>
                        <td>
                            <p>{{ Dish.price }}€</p>
                        </td>
                        <td class="flex flex-row">
                            <button @click="takeDishData(i,Dish)" onclick="modal_Dish_delete.showModal()" class="btn btn-error m-1 hover:btn-secondary hover:text-white hover:-translate-y-2 duration-300">Delete</button>
                            <button @click="takeDishData(i,Dish)" onclick="modal_Dish_modify.showModal()" class="btn btn-primary m-1 hover:btn-secondary hover:text-white hover:-translate-y-2 duration-300">Modify</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
    <div v-if="Menu.lenMenu === 0">
        <div class="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Any Menu was created.</span>
            <button class="btn w-max my-5 hover:shadow hover:-translate-y-2 duration-300" onclick="modal_Menu.showModal()"><Icon name = "ph:plus-circle-bold"></Icon> New Menu</button>
        </div>
    </div>
    <div v-if="Dish.lenDish === 0 && Menu.lenMenu > 0 ">
        <div class="alert alert-info my-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Any Dish was created.</span>
        </div>
    </div>
    <ModalDish/>
    <ModalDishDelete/>
    <ModalDishModify/>
    <ModalMenu/>
    
</template>

<script setup>
import ModalDish from "../Modals/DishModals/NewDish.vue"
import ModalDishModify from "../Modals/DishModals/ModifyDish.vue"
import ModalDishDelete from "../Modals/DishModals/DeleteDishModal.vue"
import ModalMenu from "../Modals/MenuModals/NewMenu.vue"
import { DishStore } from "../../src/store/DishStore"
import { MenuStore } from "../../src/store/MenuStore"
import { LoadingStore } from "../../src/store/LoadingStore"
const loading = LoadingStore()
const Menu = MenuStore()
const Dish = DishStore()
const data = reactive({
    loading: true
})
onMounted(async () => {
    loading.loading = true
    await takeAllInfo()
    setTimeout(() => {
        loading.loading = false
    }, 2000)
})

const takeAllInfo = async () => {
    
    const data = await takeDataDishs()
    if(data !== false){
        takeLenDataDish(data)
    }

    const data2 = await takeDataMenus()
    if(data2 !== false){
        takeLenDataMenu(data2)
    }
}
const takeDataDishs = async () => {
    let data = await Dish.getAllDishs("globy/Dishs")
    return data
}

const takeDataMenus = async () => {
    const Menulen = Menu.lenMenu
    let data = false
    if(Menulen === 0){
        data = await Menu.getAllMenus("globy/Menus")
    }
    return data
}
const takeLenDataDish = (object) => {
    let len = Dish.takeObjectLen(object)
    return len
}
const takeLenDataMenu = (object) => {
    let len = Menu.takeObjectLen(object)
    return len 
}
const takeDishData = (id, object) => {
    Dish.setDish(id, object)
}

</script>

<style></style>