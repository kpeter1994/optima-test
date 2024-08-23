<script lang="ts" setup>
import NavComponent from "~/components/global/NavComponent.vue";
</script>

<template>
  <div class="bg-radial min-h-screen">
    <NavComponent />
    <slot />
  </div>
</template>

<style scoped>
.bg-radial{
  background: radial-gradient(circle, #0B6E7A, #11263B);

}
</style>
