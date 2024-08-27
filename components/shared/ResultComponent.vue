<script setup lang="ts">
import Chart from "primevue/chart";

const props = defineProps<{
  results: {
    title: string;
    totalScore: number;
    percentage: number;
    textResult: string;
  }[]
}>();

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const  resultLabel = computed(() => {
  return props.results.map(result => result.title);
})

const resultData = computed(() => {
  return props.results.map(result => result.totalScore);
})



const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    labels: resultLabel.value,
    datasets: [
      {
        label: 'Érzelmi stabilitás',
        borderColor: documentStyle.getPropertyValue('--p-green-400'),
        pointBackgroundColor: documentStyle.getPropertyValue('--p-gray-400'),
        pointBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
        pointHoverBackgroundColor: textColor,
        pointHoverBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
        data: resultData.value
      },


    ]
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      r: {
        grid: {
          color: textColorSecondary
        }
      }
    }
  };
}
</script>

<template>
  <div class="card flex p-3 flex-col lg:flex-row">
    <div class="lg:w-1/3 flex justify-center items-center">
      <Chart type="radar" :data="chartData" :options="chartOptions" class="w-full" />

    </div>
    <div class="lg:w-2/3 lg:p-6">
      <h2 class="mb-3 font-bold text-xl">Érzelmi stabilitás</h2>
      <p v-for="result in results" class="mb-1.5">{{result.textResult}}</p>

      <div class="flex justify-end mt-1.5">
        <Button label="Megnézem" severity="contrast" rounded outlined   />

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>