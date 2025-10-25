import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/about' },
    { path: '/login', component: Login },
    { path: '/about', component: About },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
