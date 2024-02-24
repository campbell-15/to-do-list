document.addEventListener("DOMContentLoaded", function () {
    let taskList = document.getElementById("taskList");
    let allTasks = Array.from(taskList.children);

    let addButton = document.getElementById("addTask");
    addButton.addEventListener("click", addTask);

    taskList.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON" && event.target.textContent === "Delete") {
            let listItem = event.target.parentElement;
            taskList.removeChild(listItem);
            allTasks = Array.from(taskList.children);
        }
    });

    taskList.addEventListener("change", function (event) {
        if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
            let listItem = event.target.parentElement;
            listItem.style.textDecoration = event.target.checked ? "line-through" : "none";
        }
    });

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

    let allTasksButton = document.querySelector('.all-tasks');
    let todoButton = document.querySelector('.todo');
    let completedButton = document.querySelector('.completed');

    allTasksButton.addEventListener("click", function () {
        showAllTasks();
    });

    todoButton.addEventListener("click", function () {
        filterTasks(false);
    });

    completedButton.addEventListener("click", function () {
        filterTasks(true);
    });

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

    function showAllTasks() {
        allTasks.forEach(function (task) {
            task.style.display = "block";
        });
    }
});
