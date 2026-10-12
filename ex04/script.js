const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const totalEl = document.getElementById("total");

let totalTasks = 0;

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {
        li.remove();
        totalTasks = totalTasks - 1;
        totalEl.textContent = totalTasks;
    });

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    totalTasks = totalTasks + 1;
    totalEl.textContent = totalTasks;

    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});