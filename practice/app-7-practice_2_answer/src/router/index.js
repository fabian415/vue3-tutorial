import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import ProductDetail from '../views/ProductDetail.vue'
import store from '../store'


const routes = [
    { path: '/', redirect: '/products' },
    { path: '/products', name: 'Products', component: Products },
    { path: '/products/:id', name: 'ProductDetail', component: ProductDetail, props: true },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/checkout', name: 'Checkout', component: Checkout },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


// 導航守衛：進入 /checkout 前必須有商品
router.beforeEach((to, from, next) => {
    if (to.path === '/checkout') {
        const count = store.getters.cartItemCount
        if (count === 0) {
            alert('購物車為空，請先加入商品再結帳。')
            return next('/cart')
        }
    }
    next()
})


export default router