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
// 題目：《學習能量條》
// 重點練習： v-model、computed、watch、v-bind:style、v-if
//
// 說明：
// 模擬學習進度與能量消耗的畫面，隨著「專注度」與「疲勞度」變化，自動調整能量條長度與顏色。
//
// 功能要點：
// v-model 綁定輸入：專注度與疲勞度。
// computed 計算能量值（例如 能量 = 專注度 - 疲勞度 * 0.5）。
// v-bind:style 控制進度條寬度與顏色。綠色：充滿能量 #68d391，紅色：警告 #fc8181，橘色：中等 #f6ad55
// v-if 當能量值 < 20 時顯示「該休息一下囉～☕」。
// watch 當能量值降到 0 時，顯示彈窗「你需要一杯咖啡！」。

import { ref, computed, watch } from "vue";

const focus = ref(70);
const tired = ref(30);
// ✅ computed：能量值 = 專注度 - 疲勞度 * 0.5

// ✅ computed：控制進度條寬度與顏色

// ✅ watch：能量降到 0 時跳出提醒
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
