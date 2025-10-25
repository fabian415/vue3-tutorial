<template>
  <div class="cute-calculator">
    <h1>計算機</h1>

    <div class="input-area">
      <input
        type="number"
        placeholder="輸入第一個數字"
      />
      <select>
        <option value="+">➕ 加</option>
        <option value="-">➖ 減</option>
        <option value="*">✖️ 乘</option>
        <option value="/">➗ 除</option>
      </select>
      <input
        type="number"
        placeholder="輸入第二個數字"
      />
    </div>

    <div class="button-area">
      <button>計算！</button>
    </div>

    <!-- 錯誤訊息 -->
    <p class="error-msg">⚠️</p>

    <!-- 結果顯示 -->
    <div class="result-area">
      <p>結果是：</p>
      <h2></h2>
    </div>
  </div>
</template>

<script setup>
// 題目：《計算機》
// 描述：
// 請製作一個小計算機，能輸入兩個數字與選擇運算符號，點擊「計算」後顯示結果。
// 如果使用者忘記輸入數字，顯示錯誤提示（使用 v-if）；
// 點擊「顯示結果」按鈕可控制結果顯示（使用 v-show）；
// 當結果超過 100 時，數字會變色（使用 v-bind:style）。

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
