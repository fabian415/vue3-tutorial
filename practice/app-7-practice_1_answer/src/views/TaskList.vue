<template>
  <div class="task-list">
    <h2>📋 我的任務清單</h2>

    <!-- 搜尋與控制列 -->
    <div class="control-bar">
      <input
        v-model="keyword"
        placeholder="🔍 搜尋任務..."
        class="search-input"
      />

      <div class="actions">
        <button class="btn" @click="toggleAll">
          {{ allCompleted ? "🔄 全部取消完成" : "✅ 全部標記完成" }}
        </button>
        <button class="btn danger" @click="clearAll" :disabled="tasks.length === 0">
          🗑️ 全部刪除
        </button>
      </div>
    </div>

    <p class="summary">
      ✅ 已完成任務：<strong>{{ completedTasksCount }}</strong> /
      {{ tasks.length }}
    </p>

    <!-- 任務列表 -->
    <ul v-if="filteredList.length" class="task-container">
      <TaskItem
        v-for="task in filteredList"
        :key="task.id"
        :task="task"
        @toggle="toggleTask(task.id)"
        @remove="removeTask(task.id)"
      />
    </ul>

    <p v-else class="empty">📭 尚無任務，點選下方新增吧！</p>

    <router-link to="/add" class="add-btn">➕ 新增任務</router-link>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import TaskItem from "../components/TaskItem.vue";

const store = useStore();
const keyword = ref("");

// Vuex 資料
const tasks = computed(() => store.state.tasks);
const completedTasksCount = computed(() => store.getters.completedTasksCount);
const filteredList = computed(() => store.getters.filteredTasks(keyword.value));
const allCompleted = computed(() => store.getters.allCompleted);

// 操作方法
const toggleTask = (id) => store.commit("toggleTask", id);
const removeTask = (id) => store.commit("removeTask", id);
const toggleAll = () => store.commit("toggleAllTasks", !allCompleted.value);
const clearAll = () => {
  if (confirm("確定要刪除所有任務嗎？")) {
    store.commit("clearAllTasks");
  }
};
</script>

<style scoped>
.task-list {
  text-align: center;
}

h2 {
  margin-bottom: 1.2rem;
  color: #2c3e50;
}

/* 控制列 */
.control-bar {
  margin-bottom: 1rem;
}

.search-input {
  width: 80%;
  padding: 10px;
  border: 1px solid #ccd5e0;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-bottom: 0.8rem;
}

.search-input:focus {
  outline: none;
  border-color: #3a7afe;
  box-shadow: 0 0 4px rgba(58, 122, 254, 0.3);
}

/* 按鈕組 */
.actions {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.btn {
  background-color: #3a7afe;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #0056e0;
}

.btn.danger {
  background-color: #e74c3c;
}

.btn.danger:hover {
  background-color: #c0392b;
}

.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.summary {
  color: #555;
  margin-bottom: 1rem;
}

.task-container {
  list-style: none;
  padding: 0;
  margin: 0 auto 1rem;
  width: 90%;
}

.empty {
  color: #888;
  margin: 1.5rem 0;
}

.add-btn {
  display: inline-block;
  background-color: #3a7afe;
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.add-btn:hover {
  background-color: #0056e0;
}
</style>
