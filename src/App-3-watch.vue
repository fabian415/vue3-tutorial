<template>
  <p>蘋果價格：<input type="number" v-model="apple_price" /></p>
  <p>香蕉價格：<input type="number" v-model="banana_price" /></p>
</template>

<script setup>
import { ref, watch } from "vue";
const apple_price = ref(30);
const banana_price = ref(10);
const discount = ref(0.1);

// 第一種寫法：單 一 ref
watch(apple_price, (value, oldValue) => {
  console.log("apple_price: ", value);
});
watch(banana_price, (value, oldValue) => {
  console.log("banana_price: ", value);
  apple_price.value = value * 3;
});

// 第二種寫法：getter 函数
watch(
  () => apple_price.value + banana_price.value,
  (sum) => {
    console.log(`total price is: ${sum}`);
  }
);

// 第三種寫法：多個來源組成的陣列
watch([apple_price, () => banana_price.value], ([x, y]) => {
  console.log("=====================");
  console.log("new_apple_price: ", x);
  console.log("new_banana_price: ", y);
});
</script>

<style scoped></style>
