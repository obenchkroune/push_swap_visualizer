<template>
  <div class="top-container">
    <FileUpload
      @select="loadExecutable"
      mode="basic"
      choose-label="Select your push swap executable"
    />
    <InputNumber
      :min="1"
      v-tooltip.bottom="'Numbers to generate'"
      v-model="store.numbersCount"
    />
    <div style="display: flex; align-items: center; flex: 1; gap: 1rem">
      <span>speed: </span>
      <Slider
        v-model="store.speed"
        :min="0"
        :max="500"
        :step="10"
        style="width: 20rem"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FileUpload, { type FileUploadSelectEvent } from "primevue/fileupload";
import { store } from "../store";
import InputNumber from "primevue/inputnumber";
import Slider from "primevue/slider";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const loadExecutable = ($event: FileUploadSelectEvent) => {
  if (($event.files as FileList).length != 1) return;
  store.executablePath = ($event.files[0] as File).path;
  if (!store.executablePath)
    toast.add({
      severity: "error",
      summary: "Ooops!",
      detail: "couldnt load the the program 😔",
      group: "br",
      life: 5000,
    });
  else
    toast.add({
      severity: "success",
      summary: "push swap executable is now loaded!",
      detail:
        "no need to refresh the executable every time you generate numbers, one time is all it takes 🎉🎉🎉",
      group: "br",
      life: 5000,
    });
};
</script>

<style>
.top-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
