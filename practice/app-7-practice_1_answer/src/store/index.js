import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  },
  mutations: {
    addTask(state, newTask) {
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTask(state, id) {
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter((t) => t.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleAllTasks(state, completed) {
      state.tasks.forEach((t) => (t.completed = completed));
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    clearAllTasks(state) {
      state.tasks = [];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  getters: {
    completedTasksCount: (state) => state.tasks.filter((t) => t.completed).length,
    filteredTasks: (state) => (keyword) => {
      return state.tasks.filter((t) =>
        t.title.toLowerCase().includes(keyword.toLowerCase())
      );
    },
    allCompleted: (state) => state.tasks.length > 0 && state.tasks.every((t) => t.completed),
  },
});
