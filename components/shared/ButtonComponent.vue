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
  @apply py-3 px-6 text-sm border-t bg-green-400 border-green-100 rounded-lg text-blue-900 font-semibold hover:bg-green-300 transition-all duration-300;
}
</style>