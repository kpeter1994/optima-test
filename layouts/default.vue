<script lang="ts" setup></script>

<template>
  <div class="bg-radial min-h-screen">
    <div class="px-4 py-2">
      <img class="mx-auto" src="/image/logo.svg" alt="Optima tesztek">
    </div>
    <slot />
  </div>
</template>

<style scoped>
.bg-radial{
  background: radial-gradient(circle, #0B6E7A, #11263B);

}
</style>
