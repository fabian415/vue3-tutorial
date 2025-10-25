import { createRouter, createWebHistory } from "vue-router";
import TaskList from "../views/TaskList.vue";
import AddTask from "../views/AddTask.vue";

const routes = [
  { path: "/tasks", component: TaskList },
  { path: "/add", component: AddTask },
  { path: "/", redirect: "/tasks" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
