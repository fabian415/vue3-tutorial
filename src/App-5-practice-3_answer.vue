<template>
  <div class="app">
    <h1>🎯 彈跳視窗元件練習</h1>
    <button class="open-btn" @click="isOpen = true">打開提示視窗</button>

    <PopupModal :show="isOpen" @close="isOpen = false">
      <h2>🌼 提示</h2>
      <p>這是彈出視窗內容！</p>
      <button class="close-btn" @click="isOpen = false">關閉</button>
    </PopupModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PopupModal from "./components/practice/PopupModal_answer.vue";

const isOpen = ref(false);
</script>

<style scoped>
.app {
  text-align: center;
  padding: 40px;
  font-family: "Noto Sans TC", sans-serif;
}
.open-btn, .close-btn {
  background-color: #ff80ab;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.2s;
}
.open-btn:hover, .close-btn:hover {
  background-color: #ff4081;
}
</style>
