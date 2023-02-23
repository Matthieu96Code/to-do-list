import {
  getList, save,
} from './actions';

// update completed status function

const checkedTask = (check) => {
  const taskListArray = getList();
  const labelText = check.parentElement.children[1].children[0];
  const fieldSelect = check.parentElement.id[check.parentElement.id.length - 1];

  if (check.checked) {
    labelText.style.textDecoration = 'line-through';
    labelText.style.fontStyle = 'italic';
    taskListArray[fieldSelect - 1].completed = true;
    save(taskListArray);
  } else {
    labelText.style.textDecoration = 'none';
    labelText.style.fontStyle = 'normal';
    taskListArray[fieldSelect - 1].completed = false;
    save(taskListArray);
  }
};

// clear all function

const clearAllChecked = () => {
  let taskListArray = getList();
  const list = document.querySelectorAll('li');
  list.forEach((element, index) => {
    if (taskListArray[index].completed === true) {
      list[index].remove();
    }
  });
  taskListArray = taskListArray.filter((array) => !array.completed);
  save(taskListArray);
};

export { checkedTask, clearAllChecked };
