<template>
    <div>
        v-model: <input type="number" v-model="number">
    </div>
    <div>
        :value and @input: <input type="number" :value="number" @input="event => number = event.target.value">
    </div>
    <div>
        Result: {{ number }}
    </div>
    <button @click="number++">增加</button>
</template>

<script setup>
    import { ref } from 'vue'
    // 透過 ref 進行資料綁定
    const number= ref(0)
</script>

<style scoped>
</style>
