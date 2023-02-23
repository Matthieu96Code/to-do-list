import {
  getList, addTaskArray, removeTaskArray, sort, editTask, delAppear, deselect, save,
} from './actions';

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
  console.log(taskListArray[fieldSelect - 1].completed);
};

const clearAll = () => {

};

export { checkedTask, clearAll };
