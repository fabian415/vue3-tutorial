# 🧑‍💼 題目三：會員登入與個人頁（Login Dashboard）
## 🎯 學習重點
* Vuex 管理使用者登入狀態
* Vue Router 導航守衛（Navigation Guards）控制訪問權限
* Token 模擬與資料綁定

## 📘 功能綱要
/login：登入頁面（輸入帳密後更新 Vuex 狀態 user）。
/profile：會員個人資料頁，只能在登入狀態下訪問。
/about：公開頁面（任何人可訪問）。

### Vuex Store：
state: user: null
mutations: setUser, logout
getters: isAuthenticated

### Router 守衛：
```javascript==
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})
```

## 💡進階挑戰
* 模擬登入 API 延遲（練習 async actions）
* 使用 LocalStorage 儲存登入狀態
* 加入「登出」功能與狀態重置


## 📁 專案結構
```cmd=
src/
 ├─ main.js
 ├─ store/
 │  └─ index.js
 ├─ router/
 │  └─ index.js
 ├─ App.vue
 ├─ views/
 │   ├─ Login.vue
 │   ├─ Profile.vue
 │   └─ About.vue
 └─ components/
     └─ Navbar.vue
```