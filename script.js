// Execute JS after DOM has loaded
document.addEventListener("DOMContentLoaded", function () {
    let taskList = document.getElementById("taskList");
    let allTasks = Array.from(taskList.children);

    // Get reference to the "Add Task" button and attach an event listener to it
    let addButton = document.getElementById("addTask");
    addButton.addEventListener("click", addTask);

    // Event delegation to handle click events on the task list for deleting tasks
    taskList.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON" && event.target.textContent === "Delete") {
            let listItem = event.target.parentElement;
            taskList.removeChild(listItem);
            allTasks = Array.from(taskList.children);
        }
    });

    // Event delegation to handle checkbox changes for marking tasks as completed
    taskList.addEventListener("change", function (event) {
        if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
            let listItem = event.target.parentElement;
            listItem.style.textDecoration = event.target.checked ? "line-through" : "none";
        }
    });

    // Function to add a new task to the task list
    function addTask() {
        let taskInput = document.getElementById("taskInput");

        if (taskInput.value.trim() !== "") {
            let listItem = document.createElement("li");
            let checkbox = document.createElement("input");
            let taskText = document.createTextNode(taskInput.value);
            let deleteButton = document.createElement("button");

            checkbox.type = "checkbox";
            deleteButton.textContent = "Delete";

            listItem.appendChild(checkbox);
            listItem.appendChild(taskText);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            allTasks.push(listItem);

            taskInput.value = "";
        }
    }

    // Get references to the Nav buttons
    let allTasksButton = document.querySelector('.all-tasks');
    let todoButton = document.querySelector('.todo');
    let completedButton = document.querySelector('.completed');

    // Attach event listeners to the filter buttons
    allTasksButton.addEventListener("click", function () {
        showAllTasks();
    });

    todoButton.addEventListener("click", function () {
        filterTasks(false);
    });

    completedButton.addEventListener("click", function () {
        filterTasks(true);
    });

    // Function to filter tasks based on completion status
    function filterTasks(completed) {
        allTasks.forEach(function (task) {
            let checkbox = task.querySelector("input[type='checkbox']");
            if (checkbox.checked !== completed) {
                task.style.display = "none";
            } else {
                task.style.display = "block";
            }
        });
    }

    // Function to show all tasks
    function showAllTasks() {
        allTasks.forEach(function (task) {
            task.style.display = "block";
        });
    }
});
