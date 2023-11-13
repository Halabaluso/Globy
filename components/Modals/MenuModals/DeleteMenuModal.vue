<template>
    <dialog id="modal_Menu_delete" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="font-bold text-lg text-error">¿Do you want delete this Menu?</h3>
            <p class="py-4">Press DELETE for delete definitely</p>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button @click="deleteMenu" class="btn btn-error">Delete</button>
                </form>
            </div>
        </div>
    </dialog>
    <div v-if="data.booleanmsg" class="toast">
        <div class="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Menu deleted.</span>
        </div>
    </div>
</template>

<script setup>
import { MenuStore } from "../../../src/store/MenuStore"
const Menu = MenuStore()
const data = reactive({
    booleanmsg: false
})


const deleteMenu = async () => {
    const data = await Menu.deleteMenu("globy/Menus/" + Menu.Menuid)
    if(data === false){
        //
    }else{
        showMsg()
        const data = await Menu.getAllMenus("globy/Menus")
        if(data === false){
            Menu.takeObjectLen({})
        }
    }
}

const showMsg = () => {
    data.booleanmsg = true
    setTimeout(() => {
        data.booleanmsg = false
    }, 2500)
}


</script>

<style></style>