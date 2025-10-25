<template>
  <div class="fortune-machine" :class="fortuneClass">
    <h1>🎴 幸運抽籤機</h1>
    <button @click="drawFortune">抽籤</button>

    <div v-if="fortune" class="result">
      <p class="fortune-text">「{{ fortune.text }}」</p>
      <p class="fortune-level">{{ fortune.level }}</p>
      <p class="message" v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

// 籤詩資料
const fortunes = [
  { text: "萬事如意，心想事成。", level: "大吉", message: "🌞 今天是大吉日！好運滿滿～" },
  { text: "小有波折，但終能如願。", level: "中吉", message: "🌤 運勢不錯，保持微笑！" },
  { text: "平平安安，順其自然。", level: "小吉", message: "🌼 平平安安最幸福。" },
  { text: "有風有雨，需多謹慎。", level: "凶", message: "🌧 注意言行，冷靜應對。" },
  { text: "諸事不順，靜待時機。", level: "大凶", message:  "⚡ 諸事不順，靜觀其變。" },
];

const fortune = ref(null);
const message = ref("");

// ✅ v-on：點擊抽籤按鈕
const drawFortune = () => {
  const random = Math.floor(Math.random() * fortunes.length);
  fortune.value = fortunes[random];
};

// ✅ computed：根據吉凶等級決定畫面樣式 class
const fortuneClass = computed(() => {
  if (!fortune.value) return "";
  switch (fortune.value.level) {
    case "大吉":
    case "中吉":
    case "小吉":
      return "good";
    case "凶":
    case "大凶":
      return "bad";
    default:
      return "";
  }
});

// ✅ watch：監聽抽籤結果，顯示提示語句
watch(fortune, (newVal) => {
  if (!newVal) return;
  switch (newVal.level) {
    case "大吉":
      message.value = "🌞 今天是大吉日！好運滿滿～";
      break;
    case "中吉":
      message.value = "🌤 運勢不錯，保持微笑！";
      break;
    case "小吉":
      message.value = "🌼 平平安安最幸福。";
      break;
    case "凶":
      message.value = "🌧 注意言行，冷靜應對。";
      break;
    case "大凶":
      message.value = "⚡ 諸事不順，靜觀其變。";
      break;
    default:
      message.value = "";
  }
});
</script>

<style scoped>
.fortune-machine {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s, color 0.5s;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #4a5568;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2d3748;
}

.result {
  margin-top: 20px;
}

.fortune-text {
  font-size: 1.3em;
  margin-bottom: 8px;
}

.fortune-level {
  font-weight: bold;
  font-family: ui-rounded;
  font-size: 2.2em;
}

.message {
  margin-top: 8px;
  font-size: 1.1em;
}

/* ✅ v-bind:class 控制背景顏色 */
.good {
  background-color: gold;
  color: #333;
}

.bad {
  background-color: #e2e8f0;
  color: #1a202c;
}
</style>
