<template>
  <button class="fancy-btn" @click="showAlert('clicked')">
  	<slot>預設的內容 <!-- 默认内容 --></slot> <!-- slot outlet -->
	</button>
</template>
<script setup>
    const showAlert = (msg) => {
        alert(msg);
    }
</script>
<style>
.fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>