<template>
  <div class="task">
    <h3>{{ task.title }} {{ task.isFav }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(task.id)"
        >delete</i
      >
      <i class="material-icons" @click="taskStore.toggleFav(task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { defineProps } from "vue";

const props = defineProps({
  task: {
    type: Object,
  },
});

const taskStore = useTaskStore();
</script>
