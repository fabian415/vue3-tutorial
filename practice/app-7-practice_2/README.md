# 題目二：迷你購物車系統（Mini Shop）
## 🎯 學習重點
* Vue Router：多頁導覽（商品頁、購物車頁、結帳頁）
* Vuex：集中管理商品清單與購物車內容

## 📘 功能綱要
* /products：顯示商品列表，點擊「加入購物車」按鈕觸發 Vuex action。
* /cart：顯示目前購物車內容，支援增減數量或刪除商品。
* /checkout：顯示總金額與確認按鈕（模擬送出訂單）。

### Vuex Store：
state: products, cart
mutations: addToCart, removeFromCart, updateQuantity
getters: cartTotalPrice, cartItemCount
Actions 模擬非同步請求（例如從伺服器取得商品資料）。

## 💡進階挑戰
* 在導航守衛中驗證是否已選購商品才能進入 /checkout
* 使用 Vue Router 的動態路由 /products/:id 顯示商品詳情

## 專案架構
```cmd=
src/
├─ App.vue
├─ main.js
├─ store/
│  └─ index.js
├─ router/
│  └─ index.js
├─ views/
│  ├─ Cart.vue
│  └─ Checkout.vue
│  └─ ProductDetail.vue
│  └─ Products.vue
└─ components/
   └─ NavBar.vue
   └─ ProductCard.vue
```