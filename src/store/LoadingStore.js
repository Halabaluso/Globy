import { defineStore } from "pinia"

const LoadingStore = defineStore("loadingstore", {
    state: () => ({
        loading: false
    }),
})

export {
    LoadingStore
}