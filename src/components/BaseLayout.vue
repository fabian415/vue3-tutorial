<template>
  <div class="container">
    <header v-if="$slots.header" class="header">
      <slot name="header"></slot><!-- slot outlet -->
    </header>
    <main v-if="$slots.default" class="main">
      <slot></slot><!-- slot outlet -->
    </main>
    <footer v-if="$slots.footer" class="footer">
      <slot name="footer"></slot><!-- slot outlet -->
    </footer>
  </div>
</template>

<style>
/* 全域容器 */
.container {
  font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: #f9fafb;
  color: #333;
  min-height: 100vh;
}

/* 頂部固定 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  font-size: 1.25rem;
  font-weight: 600;
  z-index: 1000;
}

/* 底部固定 */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f3f4f6;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  padding: 1rem;
  font-size: 0.85rem;
  color: #6b7280;
  z-index: 1000;
}

/* 中間內容區要預留 header/footer 高度 */
.main {
  padding: 8rem 0rem 4rem;
  min-height: calc(100vh - 13rem);
  overflow-y: auto;
}
</style>
