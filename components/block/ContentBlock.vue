<script setup lang="ts">

const props = defineProps<{
  title: string;
  subtitle: string;
  text: string;
  image: {
    data: {
      attributes: {
        url: string;
        alt: string;
      }
    }
  }

}>();

</script>

<template>
  <section class="relative bg-white py-20 px-4 lg:px-12">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row">
      <div class="lg:w-2/5 ">
        <div class="overflow-hidden aspect-[1/1] image-border">
          <NuxtImg provider="strapi" :src="props.image.data.attributes.url" :alt="props.image.data.attributes.alt" class="w-full h-full object-cover" />
        </div>

      </div>
      <div class="lg:w-1/2 lg:pl-12 flex flex-col justify-center">
        <h3 class="section-subtitle">{{ props.subtitle }}</h3>
        <h2 class="section-title">{{ props.title }}</h2>
        <p class="section-lead">{{ props.text }}</p>
      </div>

    </div>
  </section>

</template>

<style scoped>
.image-border{
 border-top: 20px solid #E6E5E1;
  border-bottom: 20px solid #E6E5E1;
  border-left: 10px solid #E6E5E1;
  border-right: 10px solid #E6E5E1;
  border-radius: 3rem;
}
</style>