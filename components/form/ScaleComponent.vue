<script setup lang="ts">
import RadioButton from "~/components/form/RadioButton.vue";
</script>

<template>
  <div>
    <p class="text-gray-700 mb-6 text-center">Fontos számomra, hogy önállóan gondolkodjak és cselekedjek.</p>

    <div class="flex justify-between items-center font-semibold text-gray-700 gap-3">
      <span class="block w-[200px]">Egyetértek</span>
      <div class="flex justify-between gap-1.5 items-center ">

        <RadioButton size="60px" color="#44817B"/>
        <RadioButton size="55px" color="#44817B"/>
        <RadioButton size="50px" color="#44817B"/>
        <RadioButton size="45px" color="#44817B"/>
        <RadioButton size="50px" color="#44817B"/>
        <RadioButton size="55px" color="#44817B"/>
        <RadioButton size="60px" color="#44817B"/>


      </div>
      <span class="block w-[200px]">Nem értek egyett</span>
    </div>

  </div>
</template>

<style scoped></style>
