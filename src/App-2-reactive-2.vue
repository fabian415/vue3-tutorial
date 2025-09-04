<template>
  <p>名字：{{ user.name }}</p>
  <p>年齡：{{ user.age }}</p>
  <input type="number" v-model="user.age" />
</template>

<script setup>
import { reactive } from "vue";
// 透過 reactive 進行資料綁定
let user = reactive({
  name: "小明",
  age: 18,
});
// 直接給值、取值
user.age = 20;
console.log(user);

// // 失去響應性
// user = { name: "大明", age: 30 };
// console.log("失去響應性", user);

// // 保留響應性
// Object.assign(user, { name: "大明", age: 30 });
// console.log("保留響應性", user);
</script>

<style scoped></style>
