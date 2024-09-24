<script lang="ts" setup>
import NavComponent from "~/components/global/NavComponent.vue";
import LoadingSpinner from "~/components/shared/LoadingSpinner.vue";

const isLoading = ref(false)

defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    isLoading.value = true;
  });

  nuxtApp.hook('page:finish', () => {
    isLoading.value = false;
  });
});
</script>

<template>
  <div class="min-h-screen bg-cream-50">

    <NavComponent />
    <LoadingSpinner v-if="isLoading" />
    <NuxtPage v-else />
  </div>
</template>

<style scoped>

</style>
