import './style.css';

// Array of todo task

const todoTasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'learn code',
    completed: false,
    index: 1,
  },
  {
    description: 'complete todo list project',
    completed: false,
    index: 2,
  },
];

const populate = (tasksElement) => {
  const listContent = document.getElementById('task-list');
  const task = document.createElement('li');
  task.className = 'pm-border list-container';
  task.innerHTML = `
    <input class="list-check" type="checkbox" id="${tasksElement.index}" name"task ${tasksElement.index}">
    <label class="icon-set" for="task-${tasksElement.index}" >${tasksElement.description} 
      <a class="action-icon" href="#">
        <span class="material-symbols-outlined">
          more_vert
        </span>
      </a>
    </label>`;

  listContent.appendChild(task);
};

todoTasks.forEach(tasksElement => {
  populate(tasksElement);
});
