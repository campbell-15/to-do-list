function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let listItem = document.createElement("li");
        let checkbox = document.createElement("input");
        let taskText = document.createTextNode("taskInput.value");
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