import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
let modules = import.meta.glob("../components/**/*.vue");
// 使用 Vite 提供的 import.meta.glob() 函式，去一次性搜尋並收集指定路徑底下的所有 .vue 檔案，然後把它們轉成一個「可延遲載入」的物件（類似一個 map）。
// 回傳值是一個物件，key 是檔案路徑，value 是延遲載入的函式。類似這樣： 
// {
//   "../components/Login.vue": () => import("../components/Login.vue"),
//   "../components/User.vue": () => import("../components/User.vue"),
//   "../components/home/About.vue": () => import("../components/home/About.vue"),
//   "../components/home/Contact.vue": () => import("../components/home/Contact.vue"),
//   "../components/home/Services.vue": () => import("../components/home/Services.vue")
// }

export const router = createRouter({
  // createWebHashHistory 是 Hash 模式
  // 在 HTML5 的 History API 還沒出現之前，想要控制 URL 又不能換頁，只能透過 URL hash，也就是 #。原本在網頁裡代表的是「錨點」的含義，後面接的是這個網頁的某個位置。 
  // Hash Mode 的好處是我們無需調整後端的設定。
  // 不過這種做法也有缺點，搜尋引擎在收錄頁面的時候，會自動忽略 URL 裡面帶有 # 的部分，因此也不利於網站的 SEO。
  
  // createWebHistory 是 History 模式
  // 但就需要後端路由 (請見 4-1 小節後端路由部分) 搭配，否則當我們重新整理網頁後，就會得到一個 HTTP 404 找不到網頁的錯誤訊息。
  history: createWebHistory(),
  routes: [
    {
      name: "login",
      path: "/",
      component: modules["../components/Login.vue"],
    },
    {
      name: "User",
      path: "/user/:userId",
      component: modules["../components/User.vue"],
    },
    {
      name: "home",
      path: "/home",
      redirect: '/home/about',
      component: modules["../components/Home.vue"],
      children: [
        {
          name: "About",
          path: "about",
          component: modules["../components/home/About.vue"],
        },
        {
          name: "Services",
          path: "services",
          component: modules["../components/home/Services.vue"],
        },
        {
          name: "Contact",
          path: "contact",
          component: modules["../components/home/Contact.vue"],
        }
      ]
    },
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: modules["../components/NotFound.vue"],
    }
  ],
});


