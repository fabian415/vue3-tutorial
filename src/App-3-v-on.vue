<template>
    <!-- 綁定事件，點擊後執行 doAction 函式 -->
    <button v-on:click="doAction">Button 1</button> 

    <!-- 縮寫 -->
    <button @click="doAction">Button 2</button>

    <select @change="doChange">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>

    <input @keyup="onKeyup" @keydown="onKeydown" @keyup.enter="onEnter" value="" placeholder="打幾個字吧...">
</template>

<script setup>
    import { ref } from 'vue'
    // 透過 ref 進行資料綁定
    const message = ref("Hello! World!")
    const doAction = () => {
        console.log(message.value);
    }
    const doChange = (e) => {
        console.log(e.target.value);
    }
    const onKeyup = (e) => {
        e.target.style.background = "white"
    }
    const onKeydown = (e) => {
        e.target.style.background = "yellow"
    }
    const onEnter = (e) => {
        alert(e.target.value)
    }
</script>

<style scoped>
</style>
