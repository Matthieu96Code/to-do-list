import './style.css';

// Array of todo task

const todoTasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'complete todo list project',
    completed: false,
    index: 3,
  },
  {
    description: 'learn code',
    completed: false,
    index: 2,
  },
];

const populate = (tasksElement) => {
  const listContent = document.getElementById('task-list');
  const task = document.createElement('li');
  task.innerHTML = `<input type="checkbox" id="${tasksElement.id}" name"task ${tasksElement.id}">
  <label for="task ${tasksElement.id}" >${tasksElement.description}</label>`;

  listContent.appendChild(task);
};

todoTasks.forEach(tasksElement => {
  populate(tasksElement);
});
