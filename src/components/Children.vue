<template>
  爺爺今年已經 {{ states.old }} 歲了
  <button @click="handleAfterBirthday">幫爺爺慶生結束</button>
</template>

<script setup>
import { inject, reactive, computed } from "vue";

const grandpaStates = inject("grandpaStates");
const { handleAfterBirthday } = inject("grandpaDispatch");
const states = reactive({
    old: computed(() => grandpaStates.old),
});
</script>

<style scoped></style>
