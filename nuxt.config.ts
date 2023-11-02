// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@pinia/nuxt'],
  devtools: { enabled: true },
  css: ['@unocss/reset/eric-meyer.css'],
  typescript: {
    typeCheck: true,
  },
})
