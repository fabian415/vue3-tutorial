<template>
  <div v-if="status === 0">
    <h1>Hello {{ message }}</h1>
  </div>
  <div v-else-if="status === 1">
    <h1>Hello {{ status }}</h1>
  </div>
  <div v-else>
    <h1>Hello Else</h1>
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    // 透過 ref 進行資料綁定
    const message = ref('World')
    const status = ref(0)
    status.value = 2
</script>

<style scoped>
</style>
