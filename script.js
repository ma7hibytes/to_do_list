const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("task_List");

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.innerText = taskText;

  // Toggle complete on text click
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Action buttons container
  const actions = document.createElement("div");
  actions.className = "actions";

  // Complete button
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "Done";
  checkBtn.className = "check";
  checkBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  actions.appendChild(checkBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = "";
}
