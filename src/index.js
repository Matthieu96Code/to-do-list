import './style.css';
import populate from './injectHtml';
import { addTaskArray, removeTaskArray,taskListArray } from './actions';

// actions.forEach((tasksElement) => {
//   populate(tasksElement);
// });

document.getElementById('add-btn').addEventListener('click', (e) => {
  addTaskArray(taskListArray);
  console.log(taskListArray);
});
