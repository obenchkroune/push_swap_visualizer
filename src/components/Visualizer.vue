<template>
  <div class="visualizer-container">
    <div style="flex: 1">
      <div
        v-for="nbr in store.stackA"
        :style="{
          width: `${calculateWidth(nbr, maxNbr)}%`,
          backgroundColor: getHSLColor(calculateWidth(nbr, maxNbr)),
          height: `calc((100dvh - 200px) / ${store.numbersCount})`,
        }"
      ></div>
    </div>
    <div style="flex: 1">
      <div
        v-for="nbr in store.stackB"
        :style="{
          width: `${calculateWidth(nbr, maxNbr)}%`,
          backgroundColor: getHSLColor(calculateWidth(nbr, maxNbr)),
          height: `calc((100dvh - 200px) / ${store.numbersCount})`,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { store } from "../store";

const maxNbr = computed(() => Math.max(...store.numbersList));

const calculateWidth = (value: number, maxValue: number) => {
  return (value / maxValue) * 100;
};

const getHSLColor = (value: number) => {
  const hue = (1 - value / 100) * 240;
  return `hsl(${hue}, 100%, 50%)`;
};
</script>

<style>
.visualizer-container {
  display: flex;
  gap: 1rem;
  height: calc(100dvh - 200px);
}
</style>
