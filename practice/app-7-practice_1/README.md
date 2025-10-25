# 題目一：任務管理系統（Todo Manager Pro）
## 🎯 學習重點
* 使用 Vue Router 建立「任務列表」與「新增任務」兩頁
* 使用 Vuex 管理任務資料（state、mutations、actions）
* 練習在不同頁面共享與修改同一組任務資料

## 📘 功能綱要
* /tasks：顯示任務列表，支援「完成/刪除」操作。
* /add：新增任務的表單頁面，提交後更新 Vuex 狀態。

### Vuex Store：
state: tasks: []
mutations: addTask, toggleTask, removeTask
getters: completedTasksCount

頁面透過 mapState 與 mapMutations 操作資料。

## 💡進階挑戰
* 使用 LocalStorage 保存任務（練習 persist state）
* 新增任務搜尋功能（用 getters 過濾）

## 專案架構
```cmd=
src/
├─ App.vue
├─ main.js
├─ store/
│  └─ index.js
├─ router/
│  └─ index.js
├─ views/
│  ├─ TaskList.vue
│  └─ AddTask.vue
└─ components/
   └─ TaskItem.vue
```