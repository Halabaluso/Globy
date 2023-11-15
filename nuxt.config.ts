// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon', '@nuxtjs/color-mode'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig:{
    public:{
      firebaseConfig:{
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId
      }
    }
  },
  colorMode: {
    preference: 'bumblebee', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
  },
  components: true

});