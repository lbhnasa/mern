const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskkBtn');
const taskList = document.getElementById('taskList');
const clearCompeteBtn = document.getElementById('clearCompletedBtn');

let tasks = [];

function addTask() {
    const taskText = taskInput.ariaValueMax.trim();
    if (taskText !== '') {
        tasks.push({text: taskText});
        taskInput.value = '';

        addTaskBtn.addEventListener("click", addTask);

        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for ="taks-${index}">${task.text}</label>`
        li.querrySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    }) 
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearComletedTasks() {
    tasks = tasks.filter(task => !task.completed);

    clearCompeteBtn.addEventListener("click", clearComletedTasks);

    displayTasks();
}




