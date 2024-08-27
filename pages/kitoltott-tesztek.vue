<script lang="ts" setup>
import {definePageMeta} from "#imports";
import Chart from 'primevue/chart';
import {getResultsQuery} from "~/graphql/getQuestionsResults";
import ResultComponent from "~/components/shared/ResultComponent.vue";

definePageMeta({
  title: 'Kitöltött tesztek',
  description: 'Kitöltött tesztek',
  middleware: 'auth'
})

interface ParsedResult {
  title: string;
  totalScore: number;
  percentage: number;
  textResult: string;
}

interface ResultAttributes {
  results: string; // JSON string
}

interface ResultDataItem {
  id: string | number;
  attributes: ResultAttributes;
}

interface TestResultsData {
  testResults: {
    data: ResultDataItem[];
  };
}

const {data} = await  useAsyncQuery<TestResultsData>(getResultsQuery)
console.log(data)



const parsedResults: ComputedRef<ParsedResult[][]> = computed(() => {
  if (data.value && data.value.testResults && data.value.testResults.data) {
    return data.value.testResults.data.map((result) => {
      try {
        const parsed: ParsedResult[] = JSON.parse(result.attributes.results);
        return parsed;
      } catch (e) {
        console.error('Invalid JSON in result:', e);
        return [];
      }
    });
  } else {
    return [];
  }
});

console.log(parsedResults.value);

</script>

<template>

  <section class="py-6 lg:px-4">
    <div class="container mx-auto">
      <h1 class="text-2xl lg:text-4xl text-center font-extrabold text-white tracking-wider mb-6">Teszek</h1>
      <div class="p-6 lg:p-20 bg-slate-100 lg:rounded-3xl">

        <ResultComponent v-for="results in parsedResults" :results="results"></ResultComponent>

      </div>

    </div>
  </section>

</template>

<style scoped></style>
