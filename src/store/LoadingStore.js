import { defineStore } from "pinia"

const LoadingStore = defineStore("loadingstore", {
    state: () => ({
        loading: false
    }),
    actions:{
        changeLoading(){
            if(this.loading == true){
                this.loading = false
            }else{
                this.loading = true
            }
        }
    }
})

export {
    LoadingStore
}