<template>
    <section>
    <h2>購物車</h2>
    <div v-if="cart.length===0" class="empty">目前購物車內沒有商品。</div>
    <div v-else class="cart">
        <div v-for="item in cart" :key="item.id" class="cart-item">
            <img :src="item.product.img" />
            <div class="info">
                <h3>{{ item.product.title }}</h3>
                <p>NT$ {{ item.product.price }}</p>
            </div>
            <div class="qty">
                <button @click="decrease(item)">-</button>
                <input type="number" v-model.number="item.quantity" @change="onQtyChange(item)" />
                <button @click="increase(item)">+</button>
            </div>
            <div class="total">NT$ {{ item.product.price * item.quantity }}</div>
            <button class="remove" @click="remove(item.id)">刪除</button>
        </div>
        <div class="summary">
            <span>共 {{ itemCount }} 件</span>
            <strong>總計 NT$ {{ total }}</strong>
        </div>
        <div class="actions">
            <router-link to="/products">繼續購物</router-link>
            <router-link to="/checkout">前往結帳</router-link>
        </div>
    </div>
    </section>
</template>


<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const cart = computed(() => store.state.cart)
const total = computed(() => store.getters.cartTotalPrice)
const itemCount = computed(() => store.getters.cartItemCount)
function remove(id) { 
    store.commit('removeFromCart', id)
}
function increase(item) { 
    store.commit('updateQuantity', { productId: item.id, quantity: item.quantity + 1 }) 
}
function decrease(item) { 
    store.commit('updateQuantity', { productId: item.id, quantity: item.quantity - 1 }) 
}
function onQtyChange(item) { 
    store.commit('updateQuantity', { productId: item.id, quantity: item.quantity }) 
}
</script>


<style scoped>
.cart-item { display:flex; align-items:center; border-bottom:1px solid #ddd; padding:10px 0; }
.cart-item img { width:80px; height:60px; object-fit:cover; border-radius:4px; margin-right:10px; }
.cart-item .info { flex:1; }
.cart-item .qty { display:flex; align-items:center; gap:5px; }
.cart-item .qty input { width:50px; text-align:center; }
.cart-item .total { width:120px; text-align:right; }
.remove { color:#d44; background:none; border:none; cursor:pointer; }
.summary { margin-top:20px; display:flex; justify-content:space-between; }
.actions { margin-top:10px; display:flex; justify-content:end; gap:10px; }
.actions a { background:#d44; color:white; padding:6px 12px; border-radius:4px; text-decoration:none; }
.actions a:hover { background:#b33; }
.empty { text-align:center; margin-top:40px; color:#777; }
</style>