<template>
  <div class="chart-container">
    <VueApexCharts
      type="radialBar"
      :options="chartOptions"
      :series="[percentage]"
    />
    <div class="chart-value text-[#B6BABF]"><span class="text-[#2C7CDB]">{{ somme }}</span>/{{ max }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

// Définir les propriétés du composant
const props = defineProps({
  somme: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    default: 8
  }
})

// Calculer le pourcentage basé sur la somme
const percentage = ref((props.somme / props.max) * 100)

// Définir les options du graphique
const chartOptions = ref({
  chart: {
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
      },
      track: {
        background: '#e6e6e6',
        strokeWidth: '100%',
      },
      dataLabels: {
        show: false,
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#2361E6'], // Fin du gradient
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
})

// Mettre à jour le pourcentage lorsque la somme change
watch(
  () => props.somme,
  (newVal) => {
    percentage.value = (newVal / props.max) * 100
  }
)
</script>

<style lang="scss">
.chart-container {
  position: relative;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chart-value {
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  span {
    font-size: 14px;
  }
}
</style>
