var buttonEl = document.querySelector("#save-task");
var taskToDo = document.querySelector("#tasks-to-do"); 

buttonEl.addEventListener("click", function(){
var addTask = document.createElement("li");
addTask.textContent = "buy-food";
addTask.className = "task-item";
taskToDo.appendChild(addTask);
});