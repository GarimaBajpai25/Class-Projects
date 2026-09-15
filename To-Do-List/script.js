```javascript
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const emptyMessage = document.getElementById("emptyMessage");
const clearCompleted = document.getElementById("clearCompleted");

const filterButtons = document.querySelectorAll(".filter-btn");


// Get tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];


// Current filter
let currentFilter = "all";


// Display tasks when page loads
displayTasks();


// Add task
addBtn.addEventListener("click", addTask);


// Add task using Enter key
taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// Search tasks
searchInput.addEventListener("input", displayTasks);


// Filter buttons
filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        displayTasks();

    });

});


// Clear completed tasks
clearCompleted.addEventListener("click", function () {

    tasks = tasks.filter(function (task) {

        return !task.completed;

    });

    saveTasks();

    displayTasks();

});


// Add Task Function
function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    const newTask = {

        id: Date.now(),

        text: taskText,

        completed: false

    };


    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    displayTasks();

}


// Display Tasks
function displayTasks() {

    taskList.innerHTML = "";


    const searchText = searchInput.value.toLowerCase();


    let filteredTasks = tasks.filter(function (task) {

        return task.text.toLowerCase().includes(searchText);

    });


    // Apply filter
    if (currentFilter === "active") {

        filteredTasks = filteredTasks.filter(function (task) {

            return !task.completed;

        });

    }


    if (currentFilter === "completed") {

        filteredTasks = filteredTasks.filter(function (task) {

            return task.completed;

        });

    }


    // Empty message
    if (filteredTasks.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }


    // Create task elements
    filteredTasks.forEach(function (task) {

        const li = document.createElement("li");

        li.className = "task-item";


        if (task.completed) {

            li.classList.add("completed");

        }


        // Checkbox
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.className = "task-checkbox";

        checkbox.checked = task.completed;


        checkbox.addEventListener("change", function () {

            toggleTask(task.id);

        });


        // Task text
        const taskText = document.createElement("span");

        taskText.className = "task-text";

        taskText.textContent = task.text;


        // Edit button
        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.className = "edit-btn";


        editButton.addEventListener("click", function () {

            editTask(task.id);

        });


        // Delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-btn";


        deleteButton.addEventListener("click", function () {

            deleteTask(task.id);

        });


        li.appendChild(checkbox);

        li.appendChild(taskText);

        li.appendChild(editButton);

        li.appendChild(deleteButton);


        taskList.appendChild(li);

    });


    updateStats();

}


// Toggle task
function toggleTask(id) {

    tasks = tasks.map(function (task) {

        if (task.id === id) {

            task.completed = !task.completed;

        }

        return task;

    });


    saveTasks();

    displayTasks();

}


// Edit task
function editTask(id) {

    const task = tasks.find(function (task) {

        return task.id === id;

    });


    if (!task) {
        return;
    }


    const newText = prompt(
        "Edit your task:",
        task.text
    );


    if (newText === null) {
        return;
    }


    const trimmedText = newText.trim();


    if (trimmedText === "") {

        alert("Task cannot be empty.");

        return;
    }


    task.text = trimmedText;


    saveTasks();

    displayTasks();

}


// Delete task
function deleteTask(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this task?"
    );


    if (!confirmDelete) {
        return;
    }


    tasks = tasks.filter(function (task) {

        return task.id !== id;

    });


    saveTasks();

    displayTasks();

}


// Update statistics
function updateStats() {

    const total = tasks.length;


    const completed = tasks.filter(function (task) {

        return task.completed;

    }).length;


    const pending = total - completed;


    totalTasks.textContent = total;

    completedTasks.textContent = completed;

    pendingTasks.textContent = pending;

}


// Save tasks
function saveTasks() {

    localStorage.setItem(
        "todoTasks",
        JSON.stringify(tasks)
    );

}
```
