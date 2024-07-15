document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskAction);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTaskAction(e) {
        if (e.target.classList.contains('delete-btn')) {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        } else {
            const li = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
            li.classList.toggle('completed');
        }
    }
});
