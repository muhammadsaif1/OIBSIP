const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

let tasks = [];

// Function to create a new task object
function createTaskObject(task) {
  const date = new Date();
  return {
    id: Date.now(),
    task,
    dateAdded: date.toLocaleString(),
    dateCompleted: null,
    completed: false,
  };
}

// Function to add a new task
function addTask(event) {
  event.preventDefault();
  const task = taskInput.value.trim();
  if (task !== '') {
    const newTask = createTaskObject(task);
    tasks.push(newTask);
    renderTasks();
    taskInput.value = '';
  }
}

// Function to render the tasks
function renderTasks() {
  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.task}</span>
      <span class="date">${task.dateAdded}</span>
      <button class="complete-btn" data-id="${task.id}">${task.completed ? 'Uncomplete' : 'Complete'}</button>
      <button class="delete-btn" data-id="${task.id}">Delete</button>
    `;

    if (task.completed) {
      completedTasksList.appendChild(listItem);
    } else {
      pendingTasksList.appendChild(listItem);
    }
  });
}

// Function to complete or uncomplete a task
function completeTask(event) {
  const taskId = parseInt(event.target.dataset.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    tasks[taskIndex].dateCompleted = tasks[taskIndex].completed ? new Date().toLocaleString() : null;
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(event) {
  const taskId = parseInt(event.target.dataset.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTasks();
}

// Add event listeners
todoForm.addEventListener('submit', addTask);
pendingTasksList.addEventListener('click', function (event) {
  if (event.target.classList.contains('complete-btn')) {
    completeTask(event);
  } else if (event.target.classList.contains('delete-btn')) {
    deleteTask(event);
  }
});
completedTasksList.addEventListener('click', function (event) {
  if (event.target.classList.contains('complete-btn')) {
    completeTask(event);
  } else if (event.target.classList.contains('delete-btn')) {
    deleteTask(event);
  }
});

// Initial render
renderTasks();
