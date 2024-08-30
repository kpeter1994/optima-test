<script setup lang="ts">

import ButtonComponent from "~/components/shared/ButtonComponent.vue";

const props = defineProps<{
  title: string;
  text: string;
  image: {
    data: {
      attributes: {
        url: string;
      }
    }
  }
  link: {
    url: string;
    label: string;
    theme: string;
  }
}>();

</script>

<template>
<section class="bg-radial pt-20  px-4 lg:px-12">
  <div class="container mx-auto flex flex-col lg:flex-row">
    <div class="lg:w-7/12 md:py-6 lg:py-12 xl:py-16 2xl:py-40">
      <h2 class="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-3 text-center lg:text-left">{{props.title}}</h2>
      <p class="text-white mb-3 text-lg text-center lg:text-left">{{props.text}}</p>
      <div class="flex justify-center lg:justify-start">
        <ButtonComponent :label="props.link.label" />
      </div>


    </div>
    <div class="lg:w-10/12 relative ">
      <NuxtImg  provider="strapi" class="relative lg:absolute lg:-right-12 -bottom-12 " :src="props.image.data.attributes.url" />
    </div>

  </div>
</section>
</template>

<style scoped>

</style>