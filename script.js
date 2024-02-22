let addButton = document.getElementById("addTask");
addButton.addEventListener("click", addTask);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

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

        taskInput.value = "";
    }
}

let taskList = document.getElementById("taskList");
taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON" && event.target.textContent === "Delete") {
        let listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
});

taskList.addEventListener("change", function(event) {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
        let listItem = event.target.parentElement;
        listItem.style.textDecoration = event.target.checked ? "line-through" : "none";
    }
});