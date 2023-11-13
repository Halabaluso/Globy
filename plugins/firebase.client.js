import { initializeApp } from 'firebase/app'
import { firebaseConfig }  from "../src/ignore/dbkeys"
export default defineNuxtPlugin(nuxtApp => {
    initializeApp(firebaseConfig)
})