<template>
  <div class="app">
    <h1>留言區 💌</h1>
    <!-- 用 v-for 顯示多個留言卡片 -->
    <div class="comment-card" v-for="(item, index) in comments" :key="item.author">
      <h3 class="author">💬 {{ item.author }}</h3>
      <p class="content">{{ item.content }}</p>
    </div>
  </div>
</template>

<script setup>
// 題目：留言卡片組件（基礎 Component + Props）
// 重點：
// 建立可重複使用的元件
// 使用 props 接收資料
// 
// 說明：
// 建立一個 <CommentCard> 元件，用來顯示留言者名稱與內容。主頁面用 v-for 產生多張卡片。

// 提示：
// 使用 <CommentCard :author="..." :content="..."/>
// 練習使用 defineProps()

// 留言資料
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