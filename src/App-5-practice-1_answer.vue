<template>
  <div class="app">
    <h1>留言區 💌</h1>
    <!-- 用 v-for 顯示多個留言卡片 -->
    <CommentCard
      v-for="(msg, index) in comments"
      :key="index"
      :author="msg.author"
      :content="msg.content"
    />
  </div>
</template>

<script setup>
import CommentCard from "./components/practice/CommentCard_answer.vue";

// 模擬留言資料
const comments = [
  { author: "Alice", content: "今天的 Vue 課超有趣 😍" },
  { author: "Bob", content: "我終於懂 defineProps() 了！" },
  { author: "Charlie", content: "v-for 好方便 👍" },
];
</script>

<style scoped>
.app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Noto Sans TC", sans-serif;
}
</style>