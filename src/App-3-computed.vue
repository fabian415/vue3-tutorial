<template>
  <p>蘋果價格：<input type="number" v-model="price" /></p>
  <p>購買數量：<input type="number" v-model="quantity" /></p>
  <p>打折：<input type="number" v-model="discount" /></p>
  <hr />
  <p>總價格：{{ total }} NT dollars</p>
  <button @click="change">更新總價</button>
</template>

<script setup>
import { ref, computed } from "vue";
const price = ref(100);
const quantity = ref(1);
const discount = ref(0.1);
const total = computed(() => {
  return price.value * quantity.value * (1 - discount.value);
});

// [Vue warn] Write operation failed: computed value is readonly
const change = () => {
  total.value = 100;
};
</script>

<style scoped></style>
