<template>
  <div class="dessert-shop">
    <h1>🍩 點餐系統 🍰</h1>

    <!-- 甜點清單 -->
    <div class="dessert-list">
      <div
        v-for="dessert in desserts"
        :key="dessert.id"
        class="dessert-item"
        :class="{ selected: dessert.count > 0 }"
      >
        <h3>{{ dessert.name }}</h3>
        <p>{{ dessert.price }} 元</p>
        <div class="btn-group">
          <button @click="decrease(dessert)">➖</button>
          <span>{{ dessert.count }}</span>
          <button @click="increase(dessert)">➕</button>
        </div>
      </div>
    </div>

    <!-- 尚未選擇任何甜點 -->
    <p v-if="totalCount === 0" class="empty-msg">🍪 目前沒有選擇任何甜點喔～</p>

    <!-- 訂單金額顯示 -->
    <div v-show="totalCount > 0" class="order-summary">
      <h2>🧁 訂單總金額：<span>{{ totalPrice }}</span> 元</h2>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const desserts = ref([
  { id: 1, name: '草莓蛋糕', price: 120, count: 0 },
  { id: 2, name: '巧克力馬芬', price: 80, count: 0 },
  { id: 3, name: '焦糖布丁', price: 70, count: 0 },
  { id: 4, name: '藍莓塔', price: 100, count: 0 },
])

// 計算總數與總金額
const totalCount = computed(() =>
  desserts.value.reduce((sum, d) => sum + d.count, 0)
)
const totalPrice = computed(() =>
  desserts.value.reduce((sum, d) => sum + d.count * d.price, 0)
)

// 增減數量
const increase = (dessert) => {
  dessert.count++
}
const decrease = (dessert) => {
  if (dessert.count > 0) dessert.count--
}
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
