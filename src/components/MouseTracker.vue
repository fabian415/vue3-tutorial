<template>
    <slot :x="x" :y="y"></slot> <!-- slot outlet & 透過 v-bind 向上傳遞資料-->
</template>
<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    const x = ref(0)
    const y = ref(0)
    const update = (e) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })
</script>