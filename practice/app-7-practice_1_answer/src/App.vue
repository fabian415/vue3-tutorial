<template>
  <div id="app">
    <header class="navbar">
      <h1 class="logo">🗂️ Todo Manager Pro</h1>
      <nav class="nav-links">
        <router-link to="/tasks" class="nav-link" active-class="active">任務列表</router-link>
        <router-link to="/add" class="nav-link" active-class="active">新增任務</router-link>
      </nav>
    </header>

    <main class="main-container">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <p>Made with ❤️ using Vue 3 + Vuex + Vue Router</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 全域風格 */
#app {
  font-family: "Noto Sans TC", "Inter", sans-serif;
  color: #333;
  background: linear-gradient(180deg, #eef3f7 0%, #ffffff 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 導覽列 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3a7afe;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.logo {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
}

/* 導覽連結 */
.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.active {
  background-color: rgba(255, 255, 255, 0.35);
}

/* 主內容 */
.main-container {
  flex: 1;
  max-width: 700px;
  margin: 2rem auto;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.4s ease;
}

/* 頁尾 */
.footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: #666;
  background: #f7f9fc;
  border-top: 1px solid #e3e6ea;
}

/* 動畫 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
