<template>
  <h1>Hello {{ message }}</h1>
  <input type="text" v-model="message">
</template>

<script setup>
    import { ref } from 'vue'
    // 透過 ref 進行資料綁定
    const message = ref('World')
    // 透過 .value 給值、取值
    message.value = "Vue3"
</script>

<style scoped>
</style>
