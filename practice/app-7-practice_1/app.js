document.addEventListener('DOMContentLoaded', () => {
    // State
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // Elements
    const taskListView = document.getElementById('task-list-view');
    const addTaskView = document.getElementById('add-task-view');
    const navTasks = document.getElementById('nav-tasks');
    const navAdd = document.getElementById('nav-add');
    const taskContainer = document.getElementById('task-container');
    const addTaskForm = document.getElementById('add-task-form');
    const newTaskTitleInput = document.getElementById('new-task-title');
    const searchInput = document.getElementById('search-input');
    const completedCountEl = document.getElementById('completed-count');
    const totalCountEl = document.getElementById('total-count');
    const emptyMessage = document.getElementById('empty-message');
    const toggleAllBtn = document.getElementById('toggle-all-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const addTaskBtnFromList = document.getElementById('add-task-btn-from-list');
    const backToListBtn = document.getElementById('back-to-list-btn');

    // Functions
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const renderTasks = () => {
        const keyword = searchInput.value.toLowerCase();
        const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(keyword));

        taskContainer.innerHTML = '';
        if (filteredTasks.length === 0) {
            emptyMessage.style.display = 'block';
        } else {
            emptyMessage.style.display = 'none';
            filteredTasks.forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.className = `task-item ${task.completed ? 'done' : ''}`;
                taskItem.innerHTML = `
                    <div class="task-content">
                        <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}" />
                        <span class="task-title" data-id="${task.id}">${task.title}</span>
                    </div>
                    <button class="delete-btn" data-id="${task.id}">🗑️</button>
                `;
                taskContainer.appendChild(taskItem);
            });
        }

        updateSummary();
        updateControlButtons();
    };

    const updateSummary = () => {
        const completedCount = tasks.filter(task => task.completed).length;
        completedCountEl.textContent = completedCount;
        totalCountEl.textContent = tasks.length;
    };

    const updateControlButtons = () => {
        const allCompleted = tasks.length > 0 && tasks.every(task => task.completed);
        toggleAllBtn.textContent = allCompleted ? '🔄 全部取消完成' : '✅ 全部標記完成';
        clearAllBtn.disabled = tasks.length === 0;
    };

    const showView = (view) => {
        if (view === 'add') {
            taskListView.style.display = 'none';
            addTaskView.style.display = 'block';
            navTasks.classList.remove('active');
            navAdd.classList.add('active');
        } else {
            taskListView.style.display = 'block';
            addTaskView.style.display = 'none';
            navTasks.classList.add('active');
            navAdd.classList.remove('active');
        }
    };

    // Event Listeners
    navTasks.addEventListener('click', (e) => { e.preventDefault(); showView('list'); });
    navAdd.addEventListener('click', (e) => { e.preventDefault(); showView('add'); });
    addTaskBtnFromList.addEventListener('click', (e) => { e.preventDefault(); showView('add'); });
    backToListBtn.addEventListener('click', (e) => { e.preventDefault(); showView('list'); });

    addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = newTaskTitleInput.value.trim();
        if (title) {
            tasks.push({ id: Date.now(), title, completed: false });
            saveTasks();
            renderTasks();
            newTaskTitleInput.value = '';
            showView('list');
        }
    });

    searchInput.addEventListener('input', renderTasks);

    taskContainer.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        if (e.target.matches('input[type="checkbox"]') || e.target.matches('.task-title')) {
            const task = tasks.find(t => t.id === id);
            if (task) {
                task.completed = !task.completed;
                saveTasks();
                renderTasks();
            }
        } else if (e.target.matches('.delete-btn')) {
            if (confirm('確定要刪除此任務嗎？')) {
                tasks = tasks.filter(t => t.id !== id);
                saveTasks();
                renderTasks();
            }
        }
    });

    toggleAllBtn.addEventListener('click', () => {
        const allCompleted = tasks.length > 0 && tasks.every(task => task.completed);
        tasks.forEach(task => task.completed = !allCompleted);
        saveTasks();
        renderTasks();
    });

    clearAllBtn.addEventListener('click', () => {
        if (tasks.length > 0 && confirm('確定要刪除所有任務嗎？')) {
            tasks = [];
            saveTasks();
            renderTasks();
        }
    });

    // Initial Render
    renderTasks();
});
