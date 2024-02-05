<template>
  <div style="display: flex; width: 100%; align-items: center; gap: 0.8rem">
    <Button
      icon="pi pi-cog"
      label="Compute"
      :disabled="store.isRunning || !store.executablePath"
      @click="
        () => {
          generateNumbers();
          executeProgram();
        }
      "
    />
    <span v-if="store.instructions.length">
      Total instructions: {{ instructionsCount }}
    </span>
    <Button
      :disabled="!store.instructions.length"
      style="margin-left: auto"
      @click="resetStacks"
      severity="warning"
      icon="pi pi-refresh"
    />
    <Button
      @click="step_backward"
      icon="pi pi-backward"
      :disabled="store.isRunning || !store.instructions.length || store.i == 0"
    />
    <div v-if="store.isRunning">
      <Button @click="pauseExecution" icon="pi pi-pause" />
    </div>
    <Button
      v-else
      :disabled="!store.instructions.length"
      @click="runInstructions"
      icon="pi pi-play"
      severity="info"
    />
    <Button
      @click="step_forward"
      icon="pi pi-forward"
      :disabled="
        store.isRunning ||
        !store.instructions.length ||
        store.i >= store.instructions.length
      "
    />
  </div>
</template>

<script lang="ts" setup>
import { store } from "../store";
import { run_instruction, revertToPosition } from "../instructions";
import { computed } from "vue";
import { exec as _exec } from "node:child_process";
import { promisify } from "node:util";
import Button from "primevue/button";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const step_forward = () => {
  run_instruction(store.instructions[store.i], store);
  store.i++;
};

const step_backward = () => {
  store.i--;
  revertToPosition(store.instructions[store.i], store);
};

const instructionsCount = computed(() => store.instructions.length);

const resetStacks = () => {
  confirm.require({
    message: "Are you sure?",
    header: "Confirmation",
    icon: "pi pi-info-circle",
    rejectLabel: "Cancel",
    acceptLabel: "Reset",
    rejectClass: "p-button-secondary p-button-outlined",
    acceptClass: "p-button-warning",
    onShow: () => {
      pauseExecution();
    },
    accept: () => {
      store.i = 0;
      store.stackA = [...store.numbersList];
      store.stackB = [];
      toast.add({
        severity: "info",
        summary: "Changes applied!",
        detail: "Stacks reset to their original states.",
        group: "br",
        life: 3000,
      });
    },
  });
};

const pauseExecution = () => {
  store.isRunning = false;
  clearTimeout(store.timeoutId);
};

const executeProgram = async () => {
  store.instructions = [];
  const exec = promisify(_exec);
  try {
    const { stdout } = await exec(
      `${store.executablePath} ${store.stackA.join(" ")}`
    );
    store.instructions = stdout.split("\n").filter((val) => val != "");
  } catch (err) {
    console.log(err);
  }
};

const generateNumbers = () => {
  store.i = 0;
  const originalArray = Array.from(
    { length: store.numbersCount },
    (_, index) => index + 1
  );

  for (let i = originalArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [originalArray[i], originalArray[j]] = [originalArray[j], originalArray[i]];
  }
  store.stackB = [];
  store.stackA = [...originalArray];
  store.numbersList = [...originalArray];
};

const runInstructions = async () => {
  store.isRunning = true;
  while (store.i < store.instructions.length) {
    if (!store.isRunning) break;
    await new Promise((resolve) => {
      store.timeoutId = setTimeout(() => resolve(true), 501 - store.speed);
    });
    run_instruction(store.instructions[store.i], store);
    store.i++;
  }
  store.isRunning = false;
};
</script>

<style>
.pi {
  font-size: 1.2rem;
}
</style>
