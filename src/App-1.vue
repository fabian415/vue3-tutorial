<template>
  <h1>Hello Vue3</h1>
  <div>
    <button @click="sub">-1</button>
    <input type="text" v-model="num" />
    <button @click="add">+1</button>
  </div>
  <div>
    目前的數字是 <span style="font-weight: bold;">{{ num }}</span>
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    const num = ref(0)
    const add = () => {
        num.value++
    }
    const sub = () => {
        num.value--
    }
</script>

<style scoped>
</style>
