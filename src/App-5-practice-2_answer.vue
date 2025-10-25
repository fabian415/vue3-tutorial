<template>
  <div class="app">
    <h1>🎨 卡片模板與插槽練習</h1>

    <!-- 使用 CuteCard -->
    <CuteCard>
      <template #header>🍓 草莓卡片</template>
      <p>這是一張可愛的卡片，可以放你想說的話！</p>
      <template #footer><button>OK</button></template>
    </CuteCard>

    <!-- 再做一張不同內容的卡片 -->
    <CuteCard>
      <template #header>🌻 向日葵卡片</template>
      <p>保持微笑，面向陽光 ☀️</p>
      <template #footer><button>Got it!</button></template>
    </CuteCard>
  </div>
</template>

<script setup>
import CuteCard from "./components/practice/CuteCard_answer.vue";
</script>

<style scoped>
.app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
</style>
