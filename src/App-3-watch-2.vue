<template>
  <p>蘋果價格：<input type="number" v-model="fruits.apple" /></p>
  <p>香蕉價格：<input type="number" v-model="fruits.banana" /></p>
</template>

<script setup>
import { reactive, watch } from "vue";
const fruits = reactive({
  apple: 30,
  banana: 10,
});

// 寫法一：沒問題！
watch(fruits, (value, oldValue) => {
  console.log("------------------");
  console.log("apple: ", value.apple);
  console.log("banana: ", value.banana);
  console.log("------------------");
});

// // 寫法二：不能 watch reactive 的屬性值
// watch(fruits.banana, (value, oldValue) => {
//   console.log("banana: ", value);
// });

// 改成getter 函数，則可以 watch reactive 的屬性值
watch(
  () => fruits.banana,
  (value, oldValue) => {
    console.log("banana: ", value);
    fruits.apple = value * 3;
  }
);
</script>

<style scoped></style>
