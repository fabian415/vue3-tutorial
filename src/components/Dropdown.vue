<template>
  <div class="dropdown-container">
    <!-- <label for="dropdown">選擇項目:</label> -->
    <div class="dropdown" @click="toggleDropdown">
      <span class="dropdown-text">{{ selectedOption || '請選擇...' }}</span>
      <div class="arrow" :class="{ 'arrow-up': isOpen }"></div>
    </div>

    <!-- 下拉選單 -->
    <div class="dropdown-menu" v-show="isOpen" @click.stop>
      <div 
        class="dropdown-item" 
        v-for="option in options" 
        :key="option" 
        :class="{'selected': option === selectedOption}" 
        @click="selectOption(option)"
      >
        {{ option }}
        <span v-if="option === selectedOption" class="checkmark">✔</span> 
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 定義傳入的 props
// 父元件使用 v-model 時，傳入是 prop 屬性為 modelValue 名稱和傳出 update:modelValue 的事件名稱來進行雙向綁定
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
});

// 定義發出的事件
const emit = defineEmits();

// 因為不能更改 props, 所以需要創建一個新的變數來保存選擇的值 [copy modelValue]
const selectedOption = ref(props.modelValue);
// 控制下拉選單的開關
const isOpen = ref(false);

// 當選擇改變時，發送事件來同步父組件的 v-model
const selectOption = (option) => {
  selectedOption.value = option;
  emit('update:modelValue', option);
  isOpen.value = false; // 選擇後關閉下拉選單
};

// 切換下拉選單的顯示狀態
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* 美化下拉選單的容器 */
.dropdown-container {
  font-family: Arial, sans-serif;
}

/* 下拉容器 */
.dropdown {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #42b983;
  border-radius: 4px;
  background-color: #f9f9f9;
  cursor: pointer;
  position: relative;
}

/* 下拉箭頭 */
.arrow {
  transition: transform 0.3s ease;
}

.arrow-up {
  transform: rotate(180deg);
}

/* 下拉選單樣式 */
.dropdown-menu {
  display: block;
  margin-top: 10px;
  border: 2px solid #42b983;
  border-radius: 4px;
  background-color: #f9f9f9;
  animation: dropdown 0.3s ease-out;
}

@keyframes dropdown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 下拉項目樣式 */
.dropdown-item {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* 當選項被選中時，修改背景顏色 */
.dropdown-item.selected {
  background-color: #42b983;
  color: white;
  display: flex;
  justify-content: space-between;
}

/* 勾勾圖標 */
.checkmark {
  color: #636e69;
  margin-right: 8px;
}

/* 用戶鼠標懸停時的樣式 */
.dropdown-item:hover {
  background-color: #42b983;
  color: white;
}
</style>