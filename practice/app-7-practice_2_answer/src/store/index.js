import { createStore } from 'vuex'


const store = createStore({
    state: {
        products: [],
        cart: [], // { id, product, quantity }
    },
    mutations: {
        setProducts(state, products) {
            state.products = products
        },
        addToCart(state, product) {
            const item = state.cart.find(i => i.id === product.id)
            if (item) {
                item.quantity += 1
            } else {
                state.cart.push({ id: product.id, product, quantity: 1 })
            }
        },
        removeFromCart(state, productId) {
            state.cart = state.cart.filter(i => i.id !== productId)
        },
        updateQuantity(state, { productId, quantity }) {
            const item = state.cart.find(i => i.id === productId)
            if (item) {
                item.quantity = Math.max(1, quantity)
            }
        },
        clearCart(state) {
            state.cart = []
        }
    },
    actions: {
        fetchProducts({ commit }) {
            // 模擬非同步請求
            return new Promise(resolve => {
            setTimeout(() => {
                const products = [
                    { id: 'p1', title: '無線耳機 Pro', price: 2999, img: 'https://picsum.photos/seed/p1/400/300', desc: '主動降噪，長效電池' },
                    { id: 'p2', title: '極速行動電源', price: 1499, img: 'https://picsum.photos/seed/p2/400/300', desc: '10000mAh 快充' },
                    { id: 'p3', title: '智慧手錶 S', price: 4999, img: 'https://picsum.photos/seed/p3/400/300', desc: '健康監測與多人模式' },
                    { id: 'p4', title: '專業攝影包', price: 2599, img: 'https://picsum.photos/seed/p4/400/300', desc: '防潑水、多隔層' },
                ]
                commit('setProducts', products)
                resolve(products)
            }, 700)
            })
        }
    },
    getters: {
        cartItemCount(state) {
            return state.cart.reduce((s, i) => s + i.quantity, 0)
        },
        cartTotalPrice(state) {
            return state.cart.reduce((s, i) => s + i.product.price * i.quantity, 0)
        },
        getProductById: (state) => (id) => {
            return state.products.find(p => p.id === id)
        }
    }
})


export default store