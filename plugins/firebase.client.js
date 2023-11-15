import { initializeApp } from 'firebase/app'
export default defineNuxtPlugin(async nuxtApp => {
    const config = useRuntimeConfig()
    console.log(config.public.firebaseConfig)
    initializeApp(config.public.firebaseConfig)
})