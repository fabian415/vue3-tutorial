<template>
  <div>
    <h1>計數器: {{ count }}</h1>
    <button @click="increment">增加</button>
    <button @click="decrement">減少</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 定義傳入的 props
const props = defineProps({
  initialCount: {
    type: Number,
    default: 0
  }
})

// 定義要傳出的事件 events
const emit = defineEmits()

// 使用傳入的 initialCount 作為計數器的初始值
const count = ref(props.initialCount)
const increment = () => {
    count.value++
    emit('update:count', count.value) // 發出事件名稱為 update:count，更新父組件的 count
}
const decrement = () => {
    count.value--
    emit('update:count', count.value) // 發出事件名稱為 update:count，更新父組件的 count
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