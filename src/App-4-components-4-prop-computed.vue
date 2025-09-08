<template>
  <div>
    <Input v-model="name" />
  </div>
  <div>
    目前的值: {{ name }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Input from './components/Input.vue';
const name = ref('Hello World!!');
</script>

<style scoped></style>
