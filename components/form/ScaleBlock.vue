<script lang="ts" setup>
import ScaleComponent from "~/components/form/ScaleComponent.vue";


const props = defineProps<{
  title: string;
  category: string;
  subcategory: string;
  question: {
    id: number;
    title: string;
  }[];
}>();

const formStore = useFormStore();


const answers = reactive(
    props.question.map(q => ({
      ...q,
      value: null // Alapértelmezett value érték hozzáadása
    }))
);

// onMounted(() => {
//   formStore.setForm(answers);
// });

watch(() => formStore.currentBlock, (newVal) => {
  if (newVal < props.question.length) {
    const currentQuestion = answers.find(q => q.id === props.question[newVal].id);
    if (currentQuestion) {
      currentQuestion.value = currentQuestion.value || null;
    }
  }
});


watch(() => formStore.currentQuestion, (newVal) => {
  const questionElement = document.getElementById(`question-${newVal}`);
  if (questionElement) {
    questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
})



</script>

<template>
  <div>

<!--    <pre class="text-black">-->
<!--      {{answers}}-->
<!--      {{answers.active}}-->
<!--    </pre>-->

    <ScaleComponent
        v-for="(item, index) in question"
        :key="index"
        :question="item"
        :id="`question-${item.id}`"
        :active="item.id == formStore.currentQuestion"/>
  </div>
</template>

<style scoped></style>
