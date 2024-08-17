export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/apollo", "@pinia/nuxt"],
  apollo: {
        clients: {
            default: {
                httpEndpoint: 'http://localhost:1337/graphql'
            }
        }
    },
})