<template>
    <dialog id="modal_Dish" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form @submit="createDish($event)" method="dialog">
                <h3 class="font-bold text-lg">
                    <Icon name="ph:plus-circle-bold"></Icon> New Dish
                </h3>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Dish Name</span>
                    </label>
                    <input v-model="data.name" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Dish Subname</span>
                    </label>
                    <input v-model="data.subname" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Dish price</span>
                    </label>
                    <input v-model="data.price" type="number" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Menu from</span>
                    </label>
                    <select @change="takeMenuValues($event)" class="select select-bordered w-full">
                        <option selected disable>Select a Menu</option>
                        <option v-for="Menu,i in Menus.allMenus" :key="Menu" :value="i">{{ Menu.name }} </option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary mt-5">
                    <Icon name="ph:plus-circle-bold"></Icon> Create Dish
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
            <span>Dish was not created.</span>
        </div>
    </div>
    <div v-if="data.truemsg" class="toast">
        <div class="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Dish was created.</span>
        </div>
    </div>
</template>

<script setup>
import moment from "moment"
import { DishStore } from "../../../src/store/DishStore"
import { MenuStore } from "../../../src/store/MenuStore"
const Menus = MenuStore()
const Dish = DishStore()
const data = reactive({
    errormsg: false,
    truemsg: false,
    name: "Hamburguesa de atún",
    subname: "Sabrosa hamburguesa de lubina",
    price: 0,
    MenuId: "",
    MenuName: ""
})


const createDish = async (e) => {
    const validate = validateForm()
    if (validate) {
        await pushDish()
        await reloadDishs()
    }
}

const reloadDishs = async () => {
    const data = await Dish.getAllDishs("globy/Dishs")
    if (data !== false) {
        Dish.takeObjectLen(data)
    }

}

const pushDish = async () => {
    const string = "globy/Dishs"
    const object = {
        name: data.name,
        subname: data.subname,
        MenuId: data.MenuId,
        MenuName: data.MenuName,
        price: data.price
    }
    await Dish.pushDish(string, object)
}

const validateForm = () => {
    let booleanvalidation = true
    if (data.name.length < 2 || data.subname.length < 2 ||
        data.MenuId.length < 2  || data.MenuName.length < 2 || data.price < 0 || data.price === null) {
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

const takeMenuValues = (e) => {
    data.MenuName =  Menus.allMenus[e.target.value].name
    data.MenuId = e.target.value
}
</script>

<style></style>