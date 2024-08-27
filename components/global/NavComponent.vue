<script setup lang="ts">

const authStore = useAuthStore()



</script>

<template>
  <header>
  <div class="px-4 py-3 flex justify-between">
    <NuxtLink to="/">
      <img class="h-8 lg:h-12" src="/image/logo.svg" alt="Optima tesztek">
    </NuxtLink>
    <div class="flex items-center gap-3">
      <nav>
        <NuxtLink to="/" class="text-white p-3">Főoldal</NuxtLink>
        <NuxtLink to="/kitoltott-tesztek" class="text-white p-3">Kitöltött tesztek</NuxtLink>

      </nav>
      <div v-if="authStore.isAuthenticated" class="text-white">
        {{ authStore.user }}
        <Button @click="authStore.logout()">Kijeletkezés</Button>
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