import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "ride bike", isFav: true },
    ],
  }),
  getters: {
    favs(state) {
      return state.tasks.filter((t) => t.isFav);
    },

    favCount(state) {
      return state.tasks.reduce((prev, curr) => {
        return curr.isFav ? prev + 1 : prev;
      }, 0);
    },

    totalCount: (state) => {
      return state.tasks.length;
    },
  },
});
