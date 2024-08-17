<script lang="ts" setup>
import RadioButton from "~/components/form/RadioButton.vue";
import ScaleComponent from "~/components/form/ScaleComponent.vue";
</script>

<template>
  <div class="w-full min-h-screen  py-6 px-3 text-white">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl text-center font-bold text-white mb-2">Személyiség teszt</h2>
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, minima.</p>
    </div>
    <div class="max-w-4xl mx-auto bg-white rounded-3xl p-6 mt-12 lg:text-lg">
      <p class="text-green-900 font-semibold mb-12 ">Jelölje be a skálán mennyire ért egy az alábbi állításokkal</p>

      <ScaleComponent />
      <ScaleComponent />
      <ScaleComponent />
      <ScaleComponent />



    </div>

  </div>
</template>

<style scoped>


</style>
