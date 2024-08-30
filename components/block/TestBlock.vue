<script setup lang="ts">
import TestCardComponent from "~/components/shared/TestCardComponent.vue";

const props = defineProps<{
  title: string
  text: string
  tests:{
    data: {
      title: string
      text: string
      slug: string
      image: {
        data: {
          attributes: {
            url: string
            alt: string
          }
        }
      }
    }[]
  }
}>()

</script>

<template>


  <section class=" section-padding ">
    <div class="max-w-7xl mx-auto">
      <div class="max-w-3xl mx-auto">
        <h2 class="section-title text-center">{{title}}</h2>
        <p class="section-lead text-center">{{text}}</p>
      </div>


      <div class="lg:flex flex-wrap">
        <TestCardComponent v-for="test in tests.data" :key="test.slug" :test="test"/>
      </div>

    </div>


  </section>
</template>

<style scoped>

</style>