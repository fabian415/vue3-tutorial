<template>
    <p>   
        <!-- router-link 經編譯之後會變成 <a> 標籤 -->
        <!-- 使用 to 屬性來處理目標 URL -->
        <router-link to="/">Login</router-link> | 
        <router-link to="/home">Home</router-link> |
        <span v-for="i in 5" :key="i">
          <router-link :to="`/user/${i}`">
              User {{ i }}
          </router-link> | 
        </span>
    </p>

    <section>
        <!-- 渲染 route 的位置 -->
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