<template>
  <div class="login-page">
    <div class="login-card">
      <h2>🐻 會員登入</h2>
      <input v-model="username" placeholder="帳號（cuteuser）" />
      <input v-model="password" type="password" placeholder="密碼（1234）" />
      <button @click="handleLogin" :disabled="loading">
        {{ loading ? '登入中...' : '登入' }}
      </button>
      <p v-if="error" class="error-msg">帳號或密碼錯誤💔</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref(false)

const handleLogin = async () => {
  loading.value = true
  error.value = false
  const success = await store.dispatch('login', { username: username.value, password: password.value })
  loading.value = false
  if (success) router.push('/profile')
  else error.value = true
}
</script>

<style>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.login-card {
  background: #fff0f5;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 8px #ffb6c1;
  width: 260px;
}
input {
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 8px;
  border: 2px solid #ffc0cb;
  border-radius: 10px;
  outline: none;
}
button {
  width: 100%;
  padding: 8px;
  background-color: #ff99cc;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background-color: #ff66a3;
}
.error-msg {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
