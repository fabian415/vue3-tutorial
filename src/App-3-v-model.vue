<template>
    <input type="number" v-model="number">
    Result: {{ number }}
    <button @click="number++">增加</button>
</template>

<script setup>
    import { ref } from 'vue'
    // 透過 ref 進行資料綁定
    const number= ref(0)
</script>

<style scoped>
</style>
