<template>
    <div v-if="!product" class="empty">找不到商品。</div>
    <div v-else class="detail">
        <img :src="product.img" />
        <div class="info">
            <h2>{{ product.title }}</h2>
            <p>{{ product.desc }}</p>
            <p class="price">NT$ {{ product.price }}</p>
            <button @click="add">加入購物車</button>
        </div>
    </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'
const route = useRoute()
const store = useStore()
const productId = route.params.id
const product = computed(() => store.getters.getProductById(productId))
function add() { 
    if (product.value) 
        store.commit('addToCart', product.value) 
}
</script>


<style scoped>
    .detail { display:flex; gap:20px; align-items:flex-start; }
    .detail img { width:300px; border-radius:8px; }
    .info { flex:1; }
    .price { font-size:1.2em; font-weight:bold; margin:10px 0; }
    button { background:#d44; color:white; border:none; padding:8px 16px; border-radius:4px; cursor:pointer; }
    button:hover { background:#b33; }
</style>