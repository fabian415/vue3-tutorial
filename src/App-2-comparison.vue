<template>
    <p>ref: {{ a.id }}</p>
    <p>reactive: {{ b.id }}</p>
</template>

<script setup>
    import { ref, reactive, watch } from 'vue'
    // 透過 ref 與 reactive 進行資料綁定
    const a = ref({ id: 0 })
    const b = reactive({ id: 0 })

    // 透過 watch 監控資料變化
    watch(a, (value, oldValue) => {
        console.log("ref: ", a.value.id)
    })
    watch(b, (value, oldValue) => {
        console.log("reactive: ", b.id)
    })

    setTimeout(() => {
        // 給值
        a.value.id = 1
        b.id = 1
    }, 3000)
</script>

<style scoped>
</style>
