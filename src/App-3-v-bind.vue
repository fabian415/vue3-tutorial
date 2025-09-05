<template>
    <!-- 綁定src屬性 -->
    <img v-bind:src="imageSrc">

    <!-- class 綁定，為元素動態綁定一個或多個屬性，可以縮寫為 : -->
    <div :class="[classA, classB]">
        {{ text }}
    </div>

    <!-- class 綁定，為元素動態綁定一個或多個屬性，可以縮寫為 : -->
    <div :class="['red', isItalic ? 'italic' : '']">
        {{ text }}
    </div>

    <div>
        <!-- 綁定value屬性 -->
        <input type="text" :value="text">
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
    const text = ref('Hello World')
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
