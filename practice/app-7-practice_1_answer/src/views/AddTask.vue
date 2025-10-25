<template>
  <div class="add-task">
    <h2>🆕 新增任務</h2>
    <form @submit.prevent="addNewTask" class="form">
      <input
        v-model="title"
        placeholder="請輸入任務名稱"
        required
        class="input"
      />
      <button type="submit" class="submit-btn">✅ 新增任務</button>
    </form>

    <router-link to="/tasks" class="back-btn">⬅ 返回任務列表</router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const title = ref("");
const store = useStore();
const router = useRouter();

const addNewTask = () => {
  const newTask = {
    id: Date.now(),
    title: title.value.trim(),
    completed: false,
  };
  if (newTask.title) {
    store.commit("addTask", newTask);
    router.push("/tasks");
  }
};
</script>

<style scoped>
.add-task {
  text-align: center;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.input {
  width: 80%;
  padding: 10px;
  border: 1px solid #ccd5e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input:focus {
  border-color: #3a7afe;
  outline: none;
  box-shadow: 0 0 6px rgba(58, 122, 254, 0.25);
}

.submit-btn {
  background-color: #3a7afe;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056e0;
}

.back-btn {
  display: inline-block;
  margin-top: 1.5rem;
  color: #3a7afe;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.back-btn:hover {
  color: #0056e0;
}
</style>
