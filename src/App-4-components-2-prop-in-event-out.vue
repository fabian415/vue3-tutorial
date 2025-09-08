<template>
  <Counter :initialCount="count" @update:count="updateCount" />
  <p>父組件的計數器值：{{ count }}</p>
</template>

<script setup>
import { ref } from "vue"
import Counter from './components/Counter-2.vue'

const count = ref(153)
const updateCount = (newCount) => {
  count.value = newCount
}
</script>

<style scoped></style>
