<template>
  <p>蘋果價格：<input type="number" v-model="apple_price" /></p>
  <p>香蕉價格：<input type="number" v-model="fruits.banana" /></p>
</template>

<script setup>
import { ref, reactive, watch, computed } from "vue";
const apple_price = ref(30);
const fruits = reactive({
  orange: 10,
  banana: 5
});
const total = computed(() => apple_price.value + fruits.banana);

// watch 的 source 有四種
// (1) 直接監聽一個 ref 變數
watch(apple_price, (newVal, oldVal) => {
  console.log("apple_price: ", newVal);
});

// // (2) 監聽 reactive 物件裡的單一屬性
// watch(
//   () => fruits.banana, // 這裡是「屬性 getter」
//   (newVal, oldVal) => {
//   console.log("banana_price: ", newVal);
//   apple_price.value = newVal * 3;
// });

// // (3) 監聽一個計算屬性 computed 的結果
// watch(total, (newVal, oldVal) => {
//   console.log(`Total price: ${oldVal} → ${newVal}`);
// });

// // (4) 自定義 getter 函式
// watch(
//   () => apple_price.value * fruits.banana, // 自定義 getter
//   (newVal, oldVal) => {
//     console.log(`apple X banana: ${newVal}`);
//   }
// );

// // (5)：多個來源組成的陣列
// watch([apple_price, () =>fruits.banana], ([x, y]) => {
//   console.log("new_apple_price: ", x);
//   console.log("new_banana_price: ", y);
//   console.log("=====================");
// });
</script>

<style scoped></style>
