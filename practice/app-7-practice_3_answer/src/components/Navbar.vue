<template>
  <nav class="navbar">
    <router-link to="/about" class="nav-link">🏡 關於</router-link>
    <router-link v-if="!isAuth" to="/login" class="nav-link">🔐 登入</router-link>
    <router-link v-else to="/profile" class="nav-link">🐰 我的頁面</router-link>
    <button v-if="isAuth" class="logout-btn" @click="logout">登出</button>
  </nav>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const isAuth = computed(() => store.getters.isAuthenticated)
const logout = () => {
  store.commit('logout')
  router.push('/login')
}
</script>

<style>
.navbar {
  background: #ffdde1;
  padding: 12px;
  border-bottom: 2px solid #ffc0cb;
}
.nav-link {
  margin: 0 10px;
  text-decoration: none;
  color: #ff66a3;
  font-weight: bold;
}
.logout-btn {
  background-color: #ffb6c1;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  color: white;
  cursor: pointer;
  font-weight: bold;
}
.logout-btn:hover {
  background-color: #ff99bb;
}
</style>
