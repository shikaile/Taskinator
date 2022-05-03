var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function() {
    var addTaskEl = document.createElement("li");
    addTaskEl.textContent = "This is a new task.";
    addTaskEl.className = "task-item";
    taskToDoEl.appendChild(addTaskEl);
};

buttonEl.addEventListener("click", createTaskHandler);
