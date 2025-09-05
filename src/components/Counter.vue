<template>
  <div>
    <h1>計數器: {{ count }}</h1>
    <button @click="increment">增加</button>
    <button @click="decrement">減少</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #3a9e72;
}
</style>