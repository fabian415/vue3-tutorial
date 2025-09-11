import { createRouter, createWebHashHistory } from "vue-router";

let modules = import.meta.glob("../components/**/*.vue");

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        name: "home",
        path: "/",
        component: modules["../components/Home.vue"],
    },
    {
      name: "about",
      path: "/about",
      component: modules["../components/About.vue"],
    },
    {
      name: "overview",
      path: "/overview",
      component: modules["../components/Overview.vue"],
    }
  ],
});


