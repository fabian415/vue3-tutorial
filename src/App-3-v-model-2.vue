<template>
    <div>
       <!-- 透過 v-model進行雙向綁定(資料 <-> 元件) --> 
        v-model: <input type="number" v-model="number">
    </div>
    <div>
        <!--  v-model寫法就等同於 v-bind (props in) + v-on (event out)，後面元件章節會解釋更清楚 --> 
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
