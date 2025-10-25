<template>
    <section>
        <h2>結帳</h2>
        <div class="checkout">
            <div v-for="item in cart" :key="item.id" class="row">
                <div>{{ item.product.title }} x {{ item.quantity }}</div>
                <div>NT$ {{ item.product.price * item.quantity }}</div>
            </div>
            <div class="total">
                <span>總計</span>
                <strong>NT$ {{ total }}</strong>
            </div>
            <div class="actions">
                <router-link to="/cart">返回購物車</router-link>
                <button @click="submit">確認送出</button>
            </div>
        </div>
    </section>
</template>


<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import router from '../router'
const store = useStore()
const cart = computed(() => store.state.cart)
const total = computed(() => store.getters.cartTotalPrice)
function submit() {
    setTimeout(() => {
        alert('訂單已送出！感謝購買。')
        store.commit('clearCart')
        router.push('/products')
    }, 500)
}
</script>


<style scoped>
.checkout { background:white; border:1px solid #ddd; border-radius:8px; padding:20px; max-width:500px; }
.row { display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid #eee; }
.total { display:flex; justify-content:space-between; margin-top:15px; font-size:1.2em; }
.actions { margin-top:20px; display:flex; justify-content:end; gap:10px; }
.actions button, .actions a { background:#d44; color:white; border:none; padding:8px 16px; border-radius:4px; cursor:pointer; text-decoration:none; }
.actions button:hover, .actions a:hover { background:#b33; }
</style>