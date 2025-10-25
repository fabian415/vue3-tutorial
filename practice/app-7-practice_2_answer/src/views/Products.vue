<template>
    <section>
        <h2>商品列表</h2>
        <div v-if="loading" class="loading">載入中...</div>
        <div v-else class="grid">
            <ProductCard v-for="p in products" :key="p.id" :product="p" @add="addToCart" />
        </div>
    </section>
</template>


<script setup>
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import ProductCard from '../components/ProductCard.vue'
const store = useStore()
const loading = ref(false)
const products = computed(() => store.state.products)


onMounted(async () => {
    if (store.state.products.length === 0) {
        loading.value = true
        await store.dispatch('fetchProducts')
        loading.value = false
    }
})


function addToCart(product) {
    store.commit('addToCart', product)
}
</script>


<style scoped>
    .grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:20px; }
    .loading { text-align:center; color:#777; margin-top:40px; }
    h2 { margin-bottom:20px; }
</style>