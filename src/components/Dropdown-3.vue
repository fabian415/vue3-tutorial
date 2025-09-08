<template>
  <div class="dropdown-container">
    <!-- <label for="dropdown">選擇項目:</label> -->
    <select id="dropdown" v-model="selectedOption">
      <option 
        v-for="option in options" 
        :key="option" 
        :value="option"
        :class="{'selected-option': option === selectedOption}"
      >
        <span v-if="option === selectedOption" class="checkmark">✔</span> 
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue';

// 定義傳入的 props
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
});

// 定義發出的事件
const emit = defineEmits();

// 父元件與子元件都是用 v-model 做雙向綁定時，
// 因為不能更改 prop 值，所以使用 computed writable 方式，
// 在 get 中拷貝 props.modelValue 至新變數 ，
// 並在 set 中發出事件 update:modelValue 來更改父元件的值
const selectedOption = computed({
  get() {
    return props.modelValue
  }, 
  set(value) {
    emit('update:modelValue', value); // 發出選中的值
  }
});
</script>

<style scoped>
/* 美化下拉選單 */
.dropdown-container {
  font-family: Arial, sans-serif;
}

select {
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  border: 2px solid #42b983;
  border-radius: 4px;
  background-color: #f9f9f9;
  width: 100%;
  cursor: pointer;
  appearance: none; /* 移除默認的下拉箭頭 */
  -webkit-appearance: none;
  -moz-appearance: none;
}

/* 美化選中的選項 */
.selected-option {
  background-color: #42b983;
  color: white;
}

.selected-option .checkmark {
  color: white;
  margin-right: 8px;
}

option {
  padding: 10px;
  font-size: 16px;
}

/* 增加勾勾圖標 */
.checkmark {
  color: #42b983; /* 勾勾顏色 */
  font-size: 18px;
}
</style>