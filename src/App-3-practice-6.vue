<template>
  <div class="plant-helper" :class="plantClass">
    <h1>🌱 植物澆水小幫手</h1>
    <p>澆水次數：{{ waterCount }}</p>
    <p>距離上次澆水：{{ lastWaterDiff }} 秒</p>

    <div class="plant">
      <span v-if="plantState === 'happy'">🌱</span>
      <span v-else-if="plantState === 'normal'">🌿</span>
      <span v-else>🥀</span>
    </div>

    <button @click="waterPlant">澆水 💧</button>
  </div>
</template>

<script setup>
// 題目：《植物澆水小幫手》
// 重點練習： v-if、v-bind:class、computed、watch
//
// 說明：
// 模擬一個照顧植物的面板，使用者每天點擊「澆水 💧」，
// 系統會根據時間與次數顯示植物的狀態（快樂🌱、正常🌿、枯萎🥀）。
// 
// 功能要點：
// 用 v-if 顯示不同狀態的植物表情符號。
// 用 computed 根據「距上次澆水的時間」與「總次數」計算狀態。
// 用 watch 偵測植物狀態變化，如果變成「枯萎🥀」，彈出警示框提醒「植物口渴了！」。
// v-bind:class 改變背景顏色（健康綠 → 黃 → 棕）。

import { ref, computed, watch, onMounted, onUnmounted } from "vue";

// 狀態
const waterCount = ref(0);
const lastWaterTime = ref(Date.now());
const now = ref(Date.now());

// 每秒刷新 now
// 計算距離上次澆水秒數

// 計算植物狀態
// happy: < 3 秒，normal: 3~6 秒，枯萎: > 6 秒

// 根據狀態改變背景顏色

// watch 枯萎提醒

// 澆水
const waterPlant = () => {
};
</script>

<style scoped>
.plant-helper {
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  transition: background-color 0.5s;
}

/* 背景顏色 */
.healthy {
  background-color: #c6f6d5; /* 健康綠 */
}

.yellow {
  background-color: #faf089; /* 黃色 */
}

.brown {
  background-color: #d69e2e; /* 棕色 */
}

.plant {
  font-size: 4em;
  margin: 20px 0;
}

button {
  padding: 10px 20px;
  background-color: #4a5568;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #2d3748;
}
</style>
