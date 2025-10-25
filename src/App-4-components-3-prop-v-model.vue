<template>
  <div>
    <p>選中的項目: {{ selectedOption }}</p>
    <!-- <Dropdown  :options="options" v-model="selectedOption" /> -->
    <!-- <Dropdown2 :options="options" :defaultSelected="selectedOption" @update:selected="updateSelected" /> -->
    <Dropdown3 :options="options" v-model="selectedOption" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Dropdown from './components/Dropdown.vue';
import Dropdown2 from './components/Dropdown-2.vue';
import Dropdown3 from './components/Dropdown-3.vue';

const options = ['選項1', '選項2', '選項3', '選項4']; // 下拉選單的選項
const selectedOption = ref('');

// 更新父組件中的選中值
const updateSelected = (newSelection) => {
  selectedOption.value = newSelection;
};

watch(selectedOption, (newValue) => {
  console.log('選中的項目已改變:', newValue);
});
</script>

<style scoped></style>
