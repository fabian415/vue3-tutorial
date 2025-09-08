<template>
  <div class="dropdown-container">
    <!-- <label for="dropdown">選擇項目:</label> -->
    <select id="dropdown" v-model="selectedOption" @change="handleChange">
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
  defaultSelected: {
    type: String,
    default: '',
  },
});

// 定義發出的事件
const emit = defineEmits();

// 因為不能更改 props,所以需要創建一個新的變數來保存選擇的值 [copy defaultSelected]
const selectedOption = ref(props.defaultSelected);

// 處理選項改變時的事件，發送選中的值
const handleChange = () => {
  emit('update:selected', selectedOption.value); // 發出選中的值
};
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