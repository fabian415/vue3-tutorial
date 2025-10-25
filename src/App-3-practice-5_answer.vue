<template>
  <div class="energy-container">
    <h1>⚡ 學習能量條</h1>

    <div class="control">
      <label>專注度：{{ focus }}%</label>
      <input type="range" min="0" max="100" v-model="focus" />
    </div>

    <div class="control">
      <label>疲勞度：{{ tired }}%</label>
      <input type="range" min="0" max="100" v-model="tired" />
    </div>

    <div class="bar-wrapper">
      <div class="energy-bar" :style="barStyle"></div>
    </div>

    <p class="energy-value">能量值：{{ energy }} 分</p>

    <!-- ✅ v-if：能量太低時顯示提示 -->
    <p v-if="energy < 20" class="warning">該休息一下囉～☕</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const focus = ref(70);
const tired = ref(30);

// ✅ computed：能量值 = 專注度 - 疲勞度 * 0.5
const energy = computed(() => {
  const value = focus.value - tired.value * 0.5;
  return Math.max(0, Math.round(value)); // 避免負數
});

// ✅ computed：控制進度條寬度與顏色
const barStyle = computed(() => {
  const width = `${energy.value}%`;
  let color = "#68d391"; // 綠色：充滿能量
  if (energy.value < 20) color = "#fc8181"; // 紅色：警告
  else if (energy.value < 50) color = "#f6ad55"; // 橘色：中等
  return {
    width,
    backgroundColor: color,
  };
});

// ✅ watch：能量降到 0 時跳出提醒
watch(energy, (newVal) => {
  if (newVal === 0) {
    alert("你需要一杯咖啡！☕");
  }
});
</script>

<style scoped>
.energy-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #edf2f7;
}

.control {
  margin: 16px 0;
}

input[type="range"] {
  width: 80%;
}

.bar-wrapper {
  width: 100%;
  height: 24px;
  background-color: #cbd5e0;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 16px;
}

.energy-bar {
  height: 100%;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.energy-value {
  margin-top: 10px;
  font-weight: bold;
  font-size: 1.1em;
}

.warning {
  color: #e53e3e;
  font-weight: 600;
  margin-top: 10px;
}
</style>
