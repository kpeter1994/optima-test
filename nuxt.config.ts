import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: [
      "@nuxtjs/tailwindcss",
      "@nuxt/image",
      "@nuxtjs/apollo",
      "@pinia/nuxt",
      "@primevue/nuxt-module",
      "@nuxt/image"
  ],

  image: {
      strapi: {
          baseURL: 'http://localhost:1337/'
      }
  },
  primevue: {
      usePrimeVue: true,
      options: {
          theme: {
              preset: Aura,
              options: {
                  prefix: 'p',
                  darkModeSelector: 'system',
                  cssLayer: false,
              }
          }
      }
  },
  apollo: {
        clients: {
            default: {
                httpEndpoint: 'http://localhost:1337/graphql'
            }
        }
    },
})