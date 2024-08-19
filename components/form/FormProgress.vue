<script lang="ts" setup>

const formStore = useFormStore();

</script>

<template>
    <div class="py-2 flex justify-between gap-2 mb-3 lg:mb-6">

      <div v-for="(item, index) in formStore.form" :class="index <= formStore.currentBlock ? '' : 'opacity-50' " class="h-2 bg-green-300 flex-grow rounded"></div>
    </div>
</template>

<style scoped></style>
