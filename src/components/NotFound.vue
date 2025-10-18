<template>
  <div class="notfound-container">
    <h1 class="error-code">404</h1>
    <p class="error-message">Oops! 找不到這個頁面 😢</p>
    <router-link to="/" class="back-home">返回首頁</router-link>
  </div>
</template>

<script setup>
// 無需額外邏輯，因為這只是個靜態頁面
</script>

<style scoped>
.notfound-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f6fa;
  color: #2f3640;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  margin: 0;
  color: #718093;
  animation: float 3s ease-in-out infinite;
}

.error-message {
  font-size: 1.5rem;
  margin: 1rem 0 2rem 0;
}

.back-home {
  text-decoration: none;
  background-color: #4a90e2;
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s;
}

.back-home:hover {
  background-color: #357abd;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
