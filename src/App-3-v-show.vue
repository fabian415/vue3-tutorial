<template>
  <div v-show="enable">
    <h1>Hello {{ message }}</h1>
  </div>
  <div v-show="!enable">
    <h1>Hidden</h1>
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    // 透過 ref 進行資料綁定
    const message = ref('World')
    const enable = ref(true)
    // enable.value = false
</script>

<style scoped>
</style>
