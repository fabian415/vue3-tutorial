<template>
    <h1>{{ message }}</h1>
    <h1 v-text="message"></h1>
</template>

<script setup>
    import { ref } from 'vue'
    // 透過 ref 進行資料綁定
    const message = ref('Hello World')
</script>

<style scoped>
</style>
