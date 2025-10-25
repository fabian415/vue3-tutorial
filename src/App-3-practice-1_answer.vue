<template>
  <div class="cute-calculator">
    <h1>計算機</h1>

    <div class="input-area">
      <input
        type="number"
        v-model="num1"
        placeholder="輸入第一個數字"
      />
      <select v-model="operator">
        <option value="+">➕ 加</option>
        <option value="-">➖ 減</option>
        <option value="*">✖️ 乘</option>
        <option value="/">➗ 除</option>
      </select>
      <input
        type="number"
        v-model="num2"
        placeholder="輸入第二個數字"
      />
    </div>

    <div class="button-area">
      <button @click="calculate">計算！</button>
    </div>

    <!-- 錯誤訊息 -->
    <p v-if="errorMsg" class="error-msg">⚠️ {{ errorMsg }}</p>

    <!-- 結果顯示 -->
    <div v-else class="result-area">
      <p>結果是：</p>
      <h2
        :style="{ color: result > 100 ? '#ff66a3' : '#333' }"
      >
        {{ result }}
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const num1 = ref('')
const num2 = ref('')
const operator = ref('+')
const result = ref(0)
const errorMsg = ref('')
const showResult = ref(false)

const calculate = () => {
  errorMsg.value = ''
  if (num1.value === '' || num2.value === '') {
    errorMsg.value = '請輸入兩個數字喔～🐰'
    return
  }

  const a = parseFloat(num1.value)
  const b = parseFloat(num2.value)
  switch (operator.value) {
    case '+':
      result.value = a + b
      break
    case '-':
      result.value = a - b
      break
    case '*':
      result.value = a * b
      break
    case '/':
      result.value = b !== 0 ? a / b : '無法除以 0 😭'
      break
  }
}

const toggleResult = () => {
  showResult.value = !showResult.value
}
</script>

<style scoped>
.cute-calculator {
  margin: 40px auto;
  background-color: #fff0f6;
  border: 3px solid #ffb3c6;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(255, 150, 200, 0.3);
  text-align: center;
  font-family: "Comic Sans MS", "Nunito", sans-serif;
}

h1 {
  color: #ff6699;
}

.input-area {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

input,
select {
  border: 2px solid #ffb6c1;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 16px;
  text-align: center;
}

.button-area {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

button {
  background-color: #ff99cc;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 14px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: #ff77aa;
}

.error-msg {
  color: #ff3366;
  margin-top: 10px;
  font-weight: bold;
}

.result-area {
  margin-top: 20px;
}

.result-area h2 {
  font-size: 2em;
  transition: color 0.3s;
}
</style>
