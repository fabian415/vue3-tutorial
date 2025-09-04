<template>
    <!-- 綁定事件，點擊後執行 doAction 函式 -->
    <button v-on:click="doAction">Button 1</button> 
    <div v-once>
        <h1>Comment</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    // 透過 ref 進行資料綁定
    const message = ref("Hello! World!")
    const doAction = () => {
        message.value = message.value + "~ 騙我!";
    }
    
</script>

<style scoped>
</style>
