<template>
    <div>子元件: {{ number }}</div>
</template>

<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, useSlots, useAttrs } from 'vue'
console.log('beforeCreate');

// 定義傳入的 props
const props = defineProps({
  number: {
    type: Number,
    default: 0
  }
})
console.log("props:", props);

onBeforeMount(() => {
    console.log('onBeforeMount') // 在網頁渲染前執行
})
onMounted(() => {
    console.log('onMounted') // 在網頁渲染後執行
})
onBeforeUpdate(() => {
    console.log('onBeforeUpdate') // 在資料更新前執行
})
onUpdated(() => {
    console.log('onUpdated') // 在資料更新後執行
})
onBeforeUnmount(() => {
    console.log('onBeforeUnmount') // 在網頁卸載前執行
})
onUnmounted(() => {
    console.log('onUnmounted') // 在網頁卸載後執行
})
</script>

<style scoped>
div {
    border: 1px solid #000;
    padding: 10px;
    text-align: center;
    background: #abc;
}
</style>    