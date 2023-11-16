import { initializeApp } from 'firebase/app'
export default defineNuxtPlugin(async nuxtApp => {
    const config = useRuntimeConfig()
    initializeApp(config.public.firebaseConfig)
})