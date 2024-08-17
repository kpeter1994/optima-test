<script lang="ts" setup></script>

<template>
  <div class="bg-radial min-h-screen">
    <slot />
  </div>
</template>

<style scoped>
.bg-radial{
  background: radial-gradient(circle, #03453E, #021D1A);

}
</style>
