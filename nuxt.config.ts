// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxtjs/eslint-module', '@pinia/nuxt'],
  devtools: { enabled: true },
  css: ['@unocss/reset/eric-meyer.css'],
  typescript: {
    typeCheck: true
  },
  eslint: {}
});
