// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'bumblebee', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
  },

});