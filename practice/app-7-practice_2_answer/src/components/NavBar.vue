<template>
    <header class="navbar">
    <div class="nav-left">
        <router-link to="/products" class="logo">MiniShop</router-link>
        <router-link to="/products">商品</router-link>
        <router-link to="/cart">購物車</router-link>
    </div>
    <div class="nav-right">
        <router-link to="/cart">🛒 ({{ count }})</router-link>
    </div>
    </header>
</template>


<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const count = computed(() => store.getters.cartItemCount)
</script>


<style scoped>
.navbar { display:flex; justify-content:space-between; align-items:center; padding:10px 20px; background:#f8f8f8; border-bottom:1px solid #ddd; }
.navbar a { text-decoration:none; color:#333; margin-right:15px; }
.navbar a:hover { color:#d44; }
.logo { font-weight:bold; font-size:1.2em; }
</style>