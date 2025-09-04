<template>
    <!-- 綁定src屬性 -->
    <img v-bind:src="imageSrc">

    <!-- class 綁定，為元素動態綁定一個或多個屬性，可以縮寫為 : -->
    <div :class="[classA, classB]">
        Hello World!!!
    </div>

    <!-- class 綁定，為元素動態綁定一個或多個屬性，可以縮寫為 : -->
    <div :class="['red', isItalic ? 'italic' : '']">
        Hello World 222!!!
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    // 透過 ref 進行資料綁定
    const imageSrc = ref('https://picsum.photos/200/300')
    const classA = ref('blue')
    const classB = ref('bold')
    const isItalic = ref(true)
    // isItalic.value = false
</script>

<style scoped>
    .blue {
        color: blue;
    }
    .red {
        color: red;
    }
    .bold {
        font-weight: bold;
    }
    .italic {
        font-style: italic;
    }
</style>
