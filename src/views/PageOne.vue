<script lang="ts" setup>
import PoverItem from "@/components/PoverItem.vue";
import { useShowStore } from "@/stores/counter";
const { change } = useShowStore();
</script>
<template>
  <PoverItem />
  <h2>This is page1</h2>
  <button @click="change">change showValue</button>
  <br />
</template>

<style></style>
