<template>
  <div class="app">
    <h1>🎨 卡片模板與插槽練習</h1>

    <!-- 使用 CuteCard -->
    <div class="cute-card">
      <div class="cute-header">
        🍓 草莓卡片
      </div>
      <div class="cute-body">
        <p>這是一張可愛的卡片，可以放你想說的話！</p>
      </div>
      <div class="cute-footer">
        <button>OK</button>
      </div>
    </div>

    <div class="cute-card">
      <div class="cute-header">
        🌻 向日葵卡片
      </div>
      <div class="cute-body">
        <p>保持微笑，面向陽光 ☀️</p>
      </div>
      <div class="cute-footer">
        <button>Got it!</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 題目：卡片模板與插槽（Slot 基礎）
// 重點：
// 使用 default slot 與 具名 slot
//
// 說明：
// 製作一個 <CuteCard> 組件，提供三個插槽：
// header：放標題
// default：放主要內容
// footer：放按鈕或補充資訊
</script>

<style scoped>
.app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.cute-card {
  background: #fff0f5;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(255, 182, 193, 0.3);
  margin: 16px 0;
  text-align: center;
  font-family: "Noto Sans TC", sans-serif;
}
.cute-header {
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 10px;
}
.cute-body {
  color: #444;
  margin: 10px 0;
}
.cute-footer {
  margin-top: 12px;
}
button {
  background-color: #ff80ab;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  background-color: #ff4081;
}
</style>
