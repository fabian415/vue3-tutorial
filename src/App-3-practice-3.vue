<template>
  <div class="whack-a-mole">
    <h1>🐹 打地鼠遊戲 🎯</h1>
    <p>分數：0</p>
    <p>剩餘時間：10 秒</p>
    <p class="game-over">⏰ 遊戲結束！</p>

    <!-- 九個地洞 -->
    <div class="grid">
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole">        
        <div class="mole">🐹</div>
      </div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
    </div>

    <div class="button-area">
      <button>開始遊戲</button>
      <button>停止遊戲</button>
      <button>重新開始</button>
    </div>
  </div>
</template>

<script setup>
// 題目：《打地鼠遊戲》
// 重點： v-for, v-on, v-if, v-bind:class
// 說明： 請參考 App-3-practice-3.html，顯示 9 個地洞，用 v-for 產生。
// 隨機顯示地鼠，用 v-if 控制顯示。
// 點擊地鼠可加分（事件綁定），並顯示分數。
// 按下開始後倒數十秒，即時顯示在畫面上。十秒後遊戲結束
</script>

<style scoped>
.whack-a-mole {
  text-align: center;
  font-family: "Comic Sans MS", "Nunito", sans-serif;
  margin-top: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 15px;
  justify-content: center;
  margin: 20px auto;
}

.hole {
  width: 100px;
  height: 100px;
  background-color: #f7e6e6;
  border: 3px solid #ffb6c1;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
}

.hole.active {
  background-color: #ffe4f0;
  box-shadow: 0 0 10px #ffb3c6;
}

.mole {
  font-size: 40px;
  position: absolute;
  top: 20%;
  left: 25%;
  animation: pop 0.3s ease-in;
}

@keyframes pop {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
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

.game-over {
  color: #ff3366;
  font-size: 1.2em;
  font-weight: bold;
}
</style>
