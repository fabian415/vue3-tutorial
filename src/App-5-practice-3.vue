<template>
  <div class="app">
    <h1>🎯 彈跳視窗元件練習</h1>
    <button class="open-btn" @click="isOpen = true">打開提示視窗</button>

    <!-- PopupModal -->
    <div v-if="isOpen" class="modal-backdrop" @click.self="isOpen = false">
      <div class="modal-content">
        <h2>🌼 提示</h2>
        <p>這是彈出視窗內容！</p>
        <button class="close-btn" @click="isOpen = false">關閉</button>
      </div>
    </div>

  </div>
</template>

<script setup>
// 題目：彈跳視窗元件（Slot + Emit + Props）
// 重點：
// 使用 slot 傳入內容
// 使用 props 控制顯示/隱藏
// 使用 emit 通知父層
// 說明：
// 設計 <PopupModal> 元件：
// props: show (布林值)
// emit: close
// 使用 slot 插入彈窗內的內容

import { ref } from "vue";

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

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  min-width: 300px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  animation: pop 0.2s ease-in-out;
}

@keyframes pop {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>
