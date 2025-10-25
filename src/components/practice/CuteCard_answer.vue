<template>
  <div class="cute-card">
    <!-- Header 插槽 -->
    <div class="cute-header">
      <slot name="header">💌 預設標題</slot>
    </div>

    <!-- Default slot -->
    <div class="cute-body">
      <slot>這是預設內容</slot>
    </div>

    <!-- Footer 插槽 -->
    <div class="cute-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
// 不需要 props，因為內容由 slot 提供
</script>

<style scoped>
.cute-card {
  background: #fff0f5;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(255, 182, 193, 0.3);
  margin: 16px 0;
  text-align: center;
  font-family: "Noto Sans TC", sans-serif;
}
.cute-header {
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 10px;
}
.cute-body {
  color: #444;
  margin: 10px 0;
}
.cute-footer {
  margin-top: 12px;
}
button {
  background-color: #ff80ab;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  background-color: #ff4081;
}
</style>
