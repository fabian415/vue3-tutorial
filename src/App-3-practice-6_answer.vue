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
import { ref, computed, watch, onMounted, onUnmounted } from "vue";

// 狀態
const waterCount = ref(0);
const lastWaterTime = ref(Date.now());
const now = ref(Date.now()); // 每秒更新時間

// 每秒刷新 now
let timerId = null;
onMounted(() => {
  timerId = setInterval(() => {
    now.value = Date.now();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timerId);
});

// 計算距離上次澆水秒數
const lastWaterDiff = computed(() => {
  return Math.floor((now.value - lastWaterTime.value) / 1000);
});

// 計算植物狀態
// happy: < 3 秒，normal: 3~6 秒，枯萎: > 6 秒
const plantState = computed(() => {
  if (lastWaterDiff.value < 3) return "happy";
  if (lastWaterDiff.value < 6) return "normal";
  return "wilted";
});

// 根據狀態改變背景顏色
const plantClass = computed(() => {
  if (plantState.value === "happy") return "healthy";
  if (plantState.value === "normal") return "yellow";
  return "brown";
});

// watch 枯萎提醒
let alerted = false;
watch(plantState, (newState) => {
  if (newState === "wilted" && !alerted) {
    alert("植物口渴了！");
    alerted = true;
  }
});

// 澆水
const waterPlant = () => {
  lastWaterTime.value = Date.now();
  waterCount.value += 1;
  alerted = false; // 重置提醒
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
