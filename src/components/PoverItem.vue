<script lang="ts" setup>
import { useShowStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const { show } = storeToRefs(useShowStore());
</script>
<template>
  <Transition appear name="slide-fade">
    <div v-show="show" style="text-align: center" class="cebian">
      <h2>{{ show ? "I should show" : "I shouldn't show " }}</h2>
    </div>
  </Transition>
</template>

<style scoped>
.cebian {
  background-color: red;
  margin: 16px;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
