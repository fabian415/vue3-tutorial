<template>
    <div class="card">
        <router-link :to="`/products/${product.id}`">
            <img :src="product.img" :alt="product.title" />
        </router-link>
        <h3>{{ product.title }}</h3>
        <p>{{ product.desc }}</p>
        <div class="bottom">
            <span class="price">NT$ {{ product.price }}</span>
            <button @click="handleAdd">加入購物車</button>
        </div>
    </div>
</template>


<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({ product: Object })
const emit = defineEmits(['add'])
function handleAdd() { 
    emit('add', props.product) 
}
</script>


<style scoped>
    .card { background:white; border:1px solid #ddd; border-radius:6px; padding:10px; box-shadow:0 2px 4px rgba(0,0,0,0.1); }
    .card img { width:100%; border-radius:4px; }
    .bottom { display:flex; justify-content:space-between; align-items:center; margin-top:10px; }
    .price { font-weight:bold; }
    button { background:#d44; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; }
    button:hover { background:#b33; }
</style>