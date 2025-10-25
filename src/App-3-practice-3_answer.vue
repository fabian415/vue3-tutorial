<template>
  <div class="whack-a-mole">
    <h1>🐹 打地鼠遊戲 🎯</h1>
    <p>分數：{{ score }}</p>
    <p v-if="isPlaying">剩餘時間：{{ timeLeft }} 秒</p>
    <p v-if="!isPlaying && timeLeft === 0" class="game-over">⏰ 遊戲結束！</p>

    <!-- 九個地洞 -->
    <div class="grid">
      <div
        v-for="(hole, index) in 9"
        :key="index"
        class="hole"
        :class="{ active: moleIndex === index }"
        @click="hitMole(index)"
      >
        <div v-if="moleIndex === index" class="mole">🐹</div>
      </div>
    </div>

    <div class="button-area">
      <button @click="startGame" v-if="!isPlaying && timeLeft === 60">開始遊戲</button>
      <button @click="stopGame" v-if="isPlaying">停止遊戲</button>
      <button @click="restartGame" v-if="!isPlaying && timeLeft === 0">重新開始</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const score = ref(0)
const moleIndex = ref(null)
const isPlaying = ref(false)
const timeLeft = ref(60)
let moleTimer = null
let countdownTimer = null

// 隨機出現地鼠
const showMole = () => {
  moleIndex.value = Math.floor(Math.random() * 9)
}

// 點擊事件：打中地鼠加分
const hitMole = (index) => {
  if (!isPlaying.value) return
  if (index === moleIndex.value) {
    score.value++
    moleIndex.value = null
  }
}

// 開始遊戲
const startGame = () => {
  score.value = 0
  timeLeft.value = 10
  isPlaying.value = true

  // 地鼠隨機出現
  moleTimer = setInterval(showMole, 800)

  // 倒數計時
  countdownTimer = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      stopGame()
    }
  }, 1000)
}

// 停止遊戲
const stopGame = () => {
  isPlaying.value = false
  moleIndex.value = null
  clearInterval(moleTimer)
  clearInterval(countdownTimer)
}

// 重新開始
const restartGame = () => {
  timeLeft.value = 60
  startGame()
}
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
