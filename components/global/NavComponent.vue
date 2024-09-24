<script setup lang="ts">
import {GlobalDataQuery} from '~/graphql/getGlobalDataQuery'
import ButtonComponent from "~/components/shared/ButtonComponent.vue";



const authStore = useAuthStore()
const {data} = await useAsyncQuery<GlobalType>(GlobalDataQuery)

const globalData = computed(() => {
  return data?.value?.global.data.attributes || {} as GlobalType['global']['data']['attributes'];
})


const isVisibleForAuth = (link: Link) => {
  return authStore.isAuthenticated || !link.authRequire;
}

</script>

<template>

  <header class="absolute top-0 w-full">
    <div class="container mx-auto px-4 py-3 flex justify-between">
      <NuxtLink to="/">
        <NuxtImg class="h-12" provider="strapi" :src="globalData.logo.data.attributes.url" :alt="globalData.logo.data.attributes.alternativeText"  />
      </NuxtLink>
      <div class="flex items-center gap-3">
        <nav>
          <ul class="flex items-center gap-3">
            <li v-for="link in globalData.nav" :key="link.id">
              <NuxtLink
                  v-if="isVisibleForAuth(link)"
                  :to="link.href"
                        class="text-white p-3">{{link.name}}</NuxtLink>
            </li>
          </ul>


        </nav>

        <div class="flex gap-1">
          <NuxtLink v-for="social in globalData.social" :to="social.href" class="text-white p-3">
            <NuxtImg :src="social.image.data?.attributes.url" :alt="social.image.data?.attributes.alternativeText"  />
          </NuxtLink>
        </div>

        <div v-if="authStore.isAuthenticated" class="text-white">
          <ButtonComponent label="Kijelentkezés" @click="authStore.logout()"></ButtonComponent>
        </div>

        <NuxtLink v-if="!authStore.isAuthenticated" to="/bejelentkezes" class="text-white">
          <Button v-if="!authStore.isAuthenticated">Bejelentkezés</Button>
        </NuxtLink>

      </div>
    </div>
  </header>
</template>

<style scoped>

</style>