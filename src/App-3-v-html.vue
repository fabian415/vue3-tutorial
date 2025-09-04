<template>
    <div v-html="children"></div>
</template>

<script setup>
    import { ref } from 'vue'
    // 透過 ref 進行資料綁定
    const children = ref('<h1>Hello World</h1> <p>Vue3</p> <hr>')
</script>

<style scoped>
</style>
