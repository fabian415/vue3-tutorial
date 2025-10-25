<template>
  <div class="comment-card">
    <h3 class="author">💬 {{ author }}</h3>
    <p class="content">{{ content }}</p>
  </div>
</template>

<script setup>
// 使用 defineProps() 接收父層傳入的資料
const props = defineProps({
  author: String,
  content: String,
});
</script>

<style scoped>
.comment-card {
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 16px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.author {
  color: #0077cc;
  margin-bottom: 8px;
}
.content {
  color: #333;
}
</style>
