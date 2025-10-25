<template>
  <li class="task-item" :class="{ done: task.completed }">
    <div class="task-content">
      <input type="checkbox" :checked="task.completed" @change="$emit('toggle')" />
      <span class="task-title" @click="$emit('toggle')">{{ task.title }}</span>
    </div>
    <button class="delete-btn" @click="$emit('remove')">🗑️</button>
  </li>
</template>

<script setup>
defineProps({
  task: Object,
});
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7f9fc;
  margin-bottom: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #e1e6ef;
  transition: background 0.3s ease;
}

.task-item:hover {
  background: #eef3ff;
}

.task-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.task-title {
  cursor: pointer;
  user-select: none;
}

.done .task-title {
  text-decoration: line-through;
  color: #999;
}

.delete-btn {
  border: none;
  background: none;
  cursor: pointer;
  color: #c0392b;
  font-size: 1.1rem;
  transition: transform 0.2s;
}

.delete-btn:hover {
  transform: scale(1.2);
}
</style>
