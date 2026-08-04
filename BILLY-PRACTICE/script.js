// Load tasks from localStorage, or start with an empty array
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

// Display all tasks
const displayTasks = () => {

    // Clear the list before redrawing
    taskList.innerHTML = "";

    // Loop through every task
    tasks.forEach((task) => {

        const li = document.createElement("li");
        li.textContent = task;

        taskList.append(li);

    });

};

// Add a new task
const addTask = () => {

    // Prevent empty tasks
    if (taskInput.value.trim() === "") {
        return;
    }

    // Save to the array
    tasks.push(taskInput.value.trim());

    // Save the updated array
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Update the page
    displayTasks();

    // Clear the input
    taskInput.value = "";
    taskInput.focus();

};

// Button click
addBtn.addEventListener("click", addTask);

// Press Enter
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

// Show saved tasks when the page loads
displayTasks();

console.log(tasks)