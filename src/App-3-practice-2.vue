<template>
  <div class="dessert-shop">
    <h1>🍩 點餐系統 🍰</h1>

    <!-- 甜點清單 -->
    <div class="dessert-list">
      <div class="dessert-item">
        <h3>草莓蛋糕</h3>
        <p>120 元</p>
        <div class="btn-group">
          <button>➖</button>
          <span>0</span>
          <button>➕</button>
        </div>
      </div>
      <div class="dessert-item selected">
        <h3>巧克力馬芬</h3>
        <p>80 元</p>
        <div class="btn-group">
          <button>➖</button>
          <span>2</span>
          <button>➕</button>
        </div>
      </div>
      <div class="dessert-item">
        <h3>焦糖布丁</h3>
        <p>70 元</p>
        <div class="btn-group">
          <button>➖</button>
          <span>0</span>
          <button>➕</button>
        </div>
      </div>
      <div class="dessert-item">
        <h3>藍莓塔</h3>
        <p>100 元</p>
        <div class="btn-group">
          <button>➖</button>
          <span>0</span>
          <button>➕</button>
        </div>
      </div>
    </div>

    <!-- 尚未選擇任何甜點 -->
    <p class="empty-msg">🍪 目前沒有選擇任何甜點喔～</p>

    <!-- 訂單金額顯示 -->
    <div class="order-summary">
      <h2>🧁 訂單總金額：<span>160</span> 元</h2>
    </div>
  </div>
</template>

<script setup>
// 題目：《點餐系統》
// 練習重點： v-for、v-bind、v-on、v-if、v-show
// 描述：
// 設計一個甜點店的點單畫面。使用者可以：
// 透過 v-for 顯示甜點清單
// 用按鈕 @click 增加或減少數量
// v-if 顯示「目前沒有選擇任何甜點」
// v-show 顯示「訂單總金額」
// 使用 v-bind:class 讓被選中的甜點變色
</script>

<style scoped>
.dessert-shop {
  max-width: 480px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff5f8;
  border: 3px solid #ffcce0;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(255, 182, 193, 0.4);
  text-align: center;
  font-family: "Comic Sans MS", "Nunito", sans-serif;
}

h1 {
  color: #ff6699;
  margin-bottom: 20px;
}

.dessert-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dessert-item {
  background-color: #fff;
  border: 2px solid #ffcce0;
  border-radius: 12px;
  padding: 10px;
  transition: 0.3s;
}

.dessert-item.selected {
  background-color: #ffe6ef;
  border-color: #ff80aa;
  box-shadow: 0 0 10px #ffd6e6;
}

.dessert-item h3 {
  margin: 5px 0;
  color: #ff6699;
}

.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

button {
  background-color: #ff99cc;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 18px;
  transition: 0.2s;
}

button:hover {
  background-color: #ff77aa;
}

.empty-msg {
  color: #999;
  font-weight: bold;
  margin-top: 15px;
}

.order-summary {
  margin-top: 20px;
  background-color: #fff0f6;
  border-radius: 10px;
  padding: 10px;
}

.order-summary span {
  color: #ff3366;
  font-weight: bold;
}
</style>
