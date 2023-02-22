//  add new task to the array
import populate from './injectHtml';

const taskListArray = [];

const addTaskArray = (taskList) => {
  const taskInput = document.getElementById('task-input').value;
  if (taskInput) {
    taskList.push({ description: taskInput, completed: false, index: taskList.length });
    populate(taskList[taskList.length - 1]);
  }
};

const removeTaskArray = (taskList) => {
  const taskInput = document.getElementById('task-input').value;
  console.log('moi', taskInput);
};

export { addTaskArray, removeTaskArray, taskListArray };
