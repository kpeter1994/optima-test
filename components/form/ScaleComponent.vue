<script setup lang="ts">
import RadioButton from "~/components/form/RadioButton.vue";

const props = defineProps<{
  active: {
    type: Boolean | object;
    default: false;
  };
  question: {
    id: number;
    title: string;
    subcategory: string | null;
    value: number | null;
  }
}>();

const answers = defineModel()
const formStore = useFormStore();

const setAnswer = ( questionId: number, value: number) => {
  const currentBlock = formStore.form[formStore.currentBlock];

  const question = currentBlock.question.find(q => q.id === questionId);

  if (question) {
    question.value = value;
    formStore.setQuestion(questionId);
  }
  formStore.setQuestion(Number(questionId) + 1);
}

// const setAnswer = ( index: number, value: number) => {
//   answers.value[index - 1].value = value;
//   answers.value.active = Number(index) + 1;
// }

</script>

<template>
  <div class="mb-8" :class="active ? '' : 'opacity-30' ">
    <p class="text-gray-700 mb-4 font-semibold ">{{question.title}}</p>

    <div class="justify-between items-center font-semibold text-gray-700 gap-3">

      <div class="flex justify-between gap-0.5 md:gap-1.5 items-center ">

        <RadioButton @click="setAnswer(question.id, 1)" v-model="question.value"  :name="question.id" :value="1" size="60px" color="#0F98A8"/>
        <RadioButton @click="setAnswer(question.id, 2)" v-model="question.value"  :name="question.id" :value="2" size="55px" color="#0F98A8"/>
        <RadioButton @click="setAnswer(question.id, 3)" v-model="question.value"  :name="question.id" :value="3" size="50px" color="#0F98A8"/>
        <RadioButton @click="setAnswer(question.id, 4)" v-model="question.value"  :name="question.id" :value="4" size="45px" color="#0F98A8"/>
        <RadioButton @click="setAnswer(question.id, 5)" v-model="question.value"  :name="question.id" :value="5" size="50px" color="#0F98A8"/>
        <RadioButton @click="setAnswer(question.id, 6)" v-model="question.value"  :name="question.id" :value="6" size="55px" color="#0F98A8"/>
        <RadioButton @click="setAnswer(question.id, 7)" v-model="question.value"  :name="question.id" :value="7" size="60px" color="#0F98A8"/>

      </div>

      <div class="flex justify-between items-start text-xs lg:text-base text-gray-600">
        <span class="">Egyáltalán nem jellemző</span>
        <span class="">Teljesen jellemző</span>
      </div>

    </div>

  </div>
</template>

<style scoped></style>
