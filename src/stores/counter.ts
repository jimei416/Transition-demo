import { defineStore } from "pinia";
import { ref } from "vue";

// 是否使用pinia不会影响问题复现，这里仅为方便
export const useShowStore = defineStore("show", () => {
  const show = ref(true);
  function change() {
    show.value = !show.value;
  }

  return { show, change };
});
