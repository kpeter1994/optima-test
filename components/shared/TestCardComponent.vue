<script setup lang="ts">
const props = defineProps<{
  test: {
    attributes: {
      title: string
      text: string
      slug: string
      image: {
        data: {
          attributes: {
            url: string

          }
        }
      }
    }
  }
}>()
</script>

<template>
  <div class="p-3 lg:w-1/3 ">
    <div class="overflow-hidden bg-white rounded-3xl card-border">
      <div class="relative p-12">



        <div class="flex justify-between items-center mb-3">
          <h3 class="text-2xl font-bold">{{test?.attributes?.title}}</h3>

          <div class="w-20 border-2  border-blue-900 rounded-full overflow-hidden p-6  ">
            <NuxtImg class="w-full h-full " provider="strapi" :src="test?.attributes?.image?.data?.attributes.url"/>
          </div>
        </div>


        <p class="text-sm">{{test?.attributes?.text}}</p>



        <div class="py-3 flex justify-between items-center border-b-4 border-t-4 my-3 border-green-500">
          <span class="text-lg font-bold text-gray-500">Kitőltési idő</span>
          <span>5 perc</span>
        </div>

        <div class="flex justify-end">
          <NuxtLink :to="`/tesztek/${test?.attributes?.slug}`" class="bg-green-400 rounded-full px-4 py-2 font-semibold ">Kitöltöm</NuxtLink>
        </div>



      </div>



    </div>
  </div>
</template>

<style scoped>

.card-border{
  border-top: 2px solid rgba(0, 0, 0, 0.8);
  border-left: 2px solid rgba(0, 0, 0, 0.8);
  border-right: 2px solid rgba(0, 0, 0, 0.8);
  border-bottom: 10px solid rgba(0, 0, 0, 0.8);
}
</style>