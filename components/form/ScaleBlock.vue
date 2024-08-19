<script lang="ts" setup>
import ScaleComponent from "~/components/form/ScaleComponent.vue";


const props = defineProps<{
  title: string;
  category: string;
  subcategory: string;
  question: {
    id: number;
    title: string;
    value: number | null;
  }[];
}>();

const form = useFormStore();


const answers = ref(props.question)

watch(() => form.currentBlock, (newVal) => {
  const currentQuestion = answers.value.find(q => q.id === props.question[newVal].id);
  if (currentQuestion) {
    currentQuestion.value = props.question[newVal].value;
  }
});

watch(() => answers.value.active, (newVal) => {
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
        :key="index" :question="item"
        v-model="answers"
        :id="`question-${item.id}`"
        :active="item.id == answers.active"/>
  </div>
</template>

<style scoped></style>
