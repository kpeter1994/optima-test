<script lang="ts" setup>
import {getQuestionsQuery} from "~/graphql/getQuestionsQuery";
import ScaleBlock from "~/components/form/ScaleBlock.vue";

const formStore = useFormStore()
const {data} = await useAsyncQuery(getQuestionsQuery)


if (data.value) {
  formStore.setForm(data.value.test.data.attributes.element)
}

console.log(formStore.form)
console.log(data.value.test.data.attributes.element)

const componentsMap: { [key: string]: any }= {
  "ComponentFormScale" : ScaleBlock
}


const formBlocks = ref<any>([])

if (data.value) {
  formBlocks.value = formStore.form.map((block: any) => ({
    ...block,
    __typename: block.__typename,
  }))
}

const getComponent = (typename: string) => componentsMap[typename] || null



</script>

<template>
  <div class="w-full min-h-screen  py-6 lg:px-3 text-white">
    <div class="max-w-2xl mx-auto px-3">
      <div class="py-2 flex justify-between gap-2 mb-3 lg:mb-6">
        <div class="h-2 bg-green-300 flex-grow rounded"></div>
        <div class="h-2 bg-green-300 flex-grow rounded opacity-50"></div>
        <div class="h-2 bg-green-300 flex-grow rounded opacity-50"></div>
        <div class="h-2 bg-green-300 flex-grow rounded opacity-50"></div>
        <div class="h-2 bg-green-300 flex-grow rounded opacity-50"></div>
        <div class="h-2 bg-green-300 flex-grow rounded opacity-50"></div>
      </div>
      <h2 class="text-2xl lg:text-4xl text-center font-extrabold text-white mb-2 tracking-wider">{{data.test.data.attributes.title}}</h2>
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, minima.</p>

    </div>
    <div class="max-w-3xl mx-auto bg-white lg:rounded-3xl p-3 lg:p-20 mt-8 lg:text-lg">
      <p class="font-semibold mb-8 text-lg lg:text-2xl text-blue-800">Jelölje be a skálán mennyire ért egy az alábbi állításokkal</p>


        <component :is="getComponent(formBlocks[formStore.currentBlock].__typename)"
                   :currentBlock="formStore.currentBlock"
                   v-bind="formBlocks[formStore.currentBlock]" />

      <div class="flex justify-between">
        <button v-if="formStore.currentBlock > 0" @click="formStore.previousBlock" class="bg-blue-800 text-white px-4 py-2 rounded-lg">Vissza</button>
        <button @click="formStore.nextBlock" class="bg-blue-800 text-white px-4 py-2 rounded-lg">Következő</button>

      </div>




    </div>

  </div>
</template>

<style scoped>


</style>
