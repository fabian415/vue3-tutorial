<template>
    <p>名字：{{ user.name }}</p>
    <p>年齡：{{ user.age }}</p>
    <input type="number" v-model="user.age">
</template>

<script setup>
    import { reactive  } from 'vue'
    // 透過 reactive 進行資料綁定
    const user = reactive({
        name: '小明',
        age: 18
    })
    // 直接給值、取值
    user.age = 20
</script>

<style scoped>
</style>
