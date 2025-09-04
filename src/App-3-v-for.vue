<template>
    <div v-for="(item, index) in lists" :key="item">
      {{index + 1}}. {{ item }}
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    // 透過 ref 進行資料綁定
    const lists = ref(['吃飯', '睡覺', '寫文章'])
</script>

<style scoped>
</style>
