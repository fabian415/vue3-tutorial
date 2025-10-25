<template>
  <!-- 外層遮罩 -->
  <div
    v-if="show"
    class="modal-backdrop"
    @click.self="emitClose"
  >  <!-- .self 只有事件目標是元素本身時才觸發 -->
    <div class="modal-content">
      <!-- 插槽：讓使用者自訂內容 -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits();

function emitClose() {
  emit("close");
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  min-width: 300px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  animation: pop 0.2s ease-in-out;
}

@keyframes pop {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>
