export default (tasksElement) => {
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
