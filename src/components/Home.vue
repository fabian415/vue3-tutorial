<template>
  <div class="layout-container">
    <!-- 左側欄 -->
    <aside class="sidebar">
      <h2>Sidebar</h2>
      <div class="menu-item" @click="goTo('/home/about')">About Us</div>
      <div class="menu-item" @click="goTo('/home/services')">Our Services</div>
      <div class="menu-item" @click="goTo('/home/contact')">Contact Us</div>
      <div class="menu-item" @click="goToUser()">Go To User Page</div>
    </aside>

    <!-- 右側主內容 -->
    <main class="main-content">
      <section class="bottom-section">
        <!-- 渲染 route 的位置 -->
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script setup>
import router from "@/router";

const goTo = (path) => {
  router.push(path);
}

const goToUser = () => {
  // (1) URL參數 (params)
  // 用途： 適用於在URL 中顯示動態的參數，常在「使用者列表」跳轉到「使用者詳細頁面」時，傳遞使用者的ID。 
  // router.push({name: "User", params: { userId: 10 }});
  
  // (2) 查詢字串 (query)
  // 用途： 適用於傳遞非動態或不希望出現在路徑上的參數，例如篩選條件或分頁資訊。 
  router.push({name: "User", params: { userId: 8 }, query: { id: 123, name: "John" } });
}
</script>

<style scoped>
.layout-container {
  display: flex;
  height: 85vh;
  font-family: Arial, sans-serif;
}

/* 左側欄 */
.sidebar {
  width: 250px;
  background-color: #263238;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 右側主內容 */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f5f5f5;
}

/* 底部區域 */
.bottom-section {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  overflow-y: auto;
}

/* 側邊欄選單項目 */
.menu-item {
  padding: 12px 16px;
  border-radius: 6px;
  background-color: transparent;
  color: #cfd8dc;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

/* 滑鼠懸停效果 */
.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  transform: translateX(4px);
}

/* 被選取狀態 (可綁定 active class 使用) */
.menu-item.active {
  background-color: #37474f;
  color: #ffffff;
  font-weight: 600;
  box-shadow: inset 3px 0 0 #00bcd4;
}

</style>
