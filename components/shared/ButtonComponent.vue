<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
<button class="btn">{{label}}</button>
</template>

<style scoped>
.btn{
  @apply py-3.5 px-6 bg-green-400 rounded-lg text-blue-900 font-semibold hover:bg-green-500 transition-all duration-300;
}
</style>