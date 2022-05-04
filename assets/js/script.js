var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) {
    event.preventDefault();

    var addTaskEl = document.createElement("li");
    addTaskEl.textContent = "This is a new task.";
    addTaskEl.className = "task-item";
    taskToDoEl.appendChild(addTaskEl);
};

formEl.addEventListener("submit", createTaskHandler);
