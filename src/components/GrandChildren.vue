<template>
  在孫子的認知裡，爺爺今年已經 {{ states.old }} 歲了
  <button @click="handleAfterBirthday">孫子幫爺爺慶生</button>
</template>

<script setup>
import { inject, reactive, computed, ref } from "vue";

// 透過 inject 取得資料
const grandpaStates = inject("grandpaStates");
const { handleAfterBirthday } = inject("grandpaDispatch");
// 加了 readonly 之後就無法直接更改
// [Vue warn] Set operation on key "old" failed: target is readonly.
// grandpaStates.old = grandpaStates.old + 1;

// 透過 computed 進行資料綁定，並保持資料的響應性
const states = reactive({
    old: computed(() => grandpaStates.old),
});

// // 這樣更直觀，透過 computed 進行資料綁定
// const states = computed(() => grandpaStates);

// 使用 ref or reactive 進行資料拷貝，則無法連動資料
// const states = ref({
//     old: grandpaStates.old,
// });
</script>

<style scoped></style>
