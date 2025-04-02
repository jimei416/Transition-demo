<script lang="ts" setup>
import PoverItem from "@/components/PoverItem.vue";
import { useShowStore } from "@/stores/counter";
const { change } = useShowStore();
</script>
<template>
  <PoverItem />
  <button @click="change">change showValue</button>
  <br />
  <RouterLink to="/page2">Before the animation disappears toPage2</RouterLink>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
