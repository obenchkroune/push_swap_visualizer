<template>
  <div>
    <div class="container">
      <Settings />
      <Panel style="margin-top: 1rem; flex: 1">
        <template #header>
          <Controls />
        </template>
        <Visualizer />
      </Panel>
    </div>
    <Toast position="bottom-right" group="br" />
    <ConfirmDialog></ConfirmDialog>
  </div>
</template>

<script lang="ts" setup>
import Panel from "primevue/panel";
import Settings from "./Settings.vue";
import Visualizer from "./Visualizer.vue";
import Controls from "./Controls.vue";
import Toast from "primevue/toast";
import ConfirmDialog from "primevue/confirmdialog";
</script>

<style>
.container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
</style>
