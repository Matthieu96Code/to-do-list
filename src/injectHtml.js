export default (tasksElement) => {
  const listContent = document.getElementById('task-list');
  const task = document.createElement('li');
  task.className = 'pm-border list-container';
  task.id = `list-${tasksElement.index}`;
  task.innerHTML = `
    <input class="list-check" type="checkbox" id="${tasksElement.index}" name"task-${tasksElement.index}">
    <label class="icon-set" id="taskid${tasksElement.index}" for="task-${tasksElement.index}" >${tasksElement.description}
    <input class="replace-task pm-font" value="${tasksElement.description}" type="text" name="tex-edit">
      <a class="action-icon" href="#">
        <span class="material-symbols-outlined">
          more_vert
        </span>
      </a>
    </label>`;

  listContent.appendChild(task);
};
