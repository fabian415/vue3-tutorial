<template>
  <div class="profile-page">
    <div class="profile-card">
      <h2>🎀 哈囉，{{ user.username }}！</h2>
      <p>這是你的可愛個人頁 💖</p>
      <p>登入 Token：{{ user.token }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const user = computed(() => store.state.user)
</script>

<style>
.profile-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}
.profile-card {
  background: #fff0f5;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 6px 10px #ffc0cb;
  width: 300px;
}
</style>
