// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@pinia/nuxt', "@nuxt/image"],
  devtools: { enabled: true },
  css: ['@unocss/reset/normalize.css'],
  /* https://nuxt.com/docs/guide/concepts/typescript#type-checking */
  typescript: {
    typeCheck: false,
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'p-0 m-0',
      },
    },
  },
})