<template>
  <!-- 重要：給 v-for 渲染的元素綁定 key 值，是為了幫助 Vue 去確認元素/節點的身份 -->
  <div v-for="(item, index) in lists" :key="item">
    {{ index + 1 }}. {{ item }}
    <input type="text" value="" />
  </div>
  <button @click="reorder">重新排序</button>
</template>

<script setup>
import { ref } from "vue";
// 透過 ref 進行資料綁定
const lists = ref(["吃飯", "睡覺", "寫文章"]);
const reorder = () => {
  lists.value.reverse();
};
</script>

<style scoped></style>
