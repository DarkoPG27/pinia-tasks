<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- task list -->

    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";

const taskStore = useTaskStore();
</script>
