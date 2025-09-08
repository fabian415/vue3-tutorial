<template>
    <button @click="show = true">產生子元件</button> | <button @click="generate">更新內容</button> | <button @click="show = false">移除子元件</button>
    <hr>
    <LifeCycle v-if="show" :number="number"></LifeCycle>
</template>

<script setup>
import { ref } from 'vue';
import LifeCycle from './components/LifeCycle.vue'
const show = ref(false)
const number = ref(0)
const generate = () => {
    number.value = Math.random()
}
</script>

<style scoped>
</style>