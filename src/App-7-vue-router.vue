<template>
    <h1>Hello Vue Router App !!</h1>
    <p>   
        <!-- router-link 經編譯之後會變成 <a> 標籤 -->
        <!-- 使用 to 屬性來處理目標 URL -->
        <router-link to="/">Go to Home</router-link> | 
        <router-link to="/about">About</router-link>
    </p>
    
    <!-- 渲染 route 的位置 -->
    <section>
        <router-view></router-view>
    </section>
</template>

<script setup>
</script>

<style scoped>
p > a {
  margin: 0 1rem;
}

section {
  border: 1px solid #000;
  padding: 10px;
}
</style>