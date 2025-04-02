import { defineStore } from "pinia";
import { ref } from "vue";

export const useShowStore = defineStore("show", () => {
  const show = ref(true);
  function change() {
    show.value = !show.value;
  }

  return { show, change };
});
