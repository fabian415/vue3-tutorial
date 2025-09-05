<template>
  <div class="input-container">
    <input type="text" v-model="localName" placeholder=" " class="styled-input">
    <label class="input-label">名稱</label>
    <span class="underline"></span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits();

const localName = computed({
  get() {
    return props.modelValue;
  }, 
  set(newValue) {
    emit('update:modelValue', newValue);
  }
});
</script>

<style scoped>
/* 容器設定 */
.input-container {
  position: relative;
  margin: 20px 0;
  width: 250px;
}

/* 輸入框樣式 */
.styled-input {
  width: 100%;
  padding: 12px 10px 6px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  background: transparent;
  transition: border-color 0.3s ease;
}

/* focus 時改變底線顏色 */
.styled-input:focus {
  border-color: #42b983;
}

/* Label 文字 (浮動效果) */
.input-label {
  position: absolute;
  left: 10px;
  top: 12px;
  color: #aaa;
  font-size: 16px;
  pointer-events: none;
  transition: 0.2s ease all;
}

/* 當有輸入或 focus 時，label 上浮縮小 */
.styled-input:focus ~ .input-label,
.styled-input:not(:placeholder-shown) ~ .input-label {
  top: -8px;
  left: 5px;
  font-size: 12px;
  color: #42b983;
}

/* 動態底線效果 */
.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #42b983;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

/* focus 時顯示動畫底線 */
.styled-input:focus ~ .underline {
  transform: scaleX(1);
}
</style>