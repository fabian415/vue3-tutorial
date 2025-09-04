<template>
  <div>
    <h2>使用者資訊</h2>
    <input v-model="user.name" placeholder="姓名" />
    <input v-model="user.address.city" placeholder="城市" />
    <input v-model="user.address.zip" placeholder="郵遞區號" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const user = ref({
  name: "Alice",
  address: {
    city: "Taipei",
    zip: "100",
  },
});

watch(
  user,
  (newValue, oldValue) => {
    console.log("使用者資訊已改變");
    console.log("新值:", newValue);
    console.log("舊值:", oldValue);
  },
  { deep: true }
);

// 無法使用！
// watch(
//   () => user.name,
//   (value, oldValue) => {
//     console.log("姓名已改變: ", value);
//   }
// );
</script>

<style scoped></style>
