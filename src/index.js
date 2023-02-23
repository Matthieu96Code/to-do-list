import './style.css';
import populate from './injectHtml';
import { getList, addTaskArray, removeTaskArray, sort, editTask } from './actions';

const launch = () => {
  const taskListStore = getList();
  taskListStore.forEach((element) => {
    populate(element);
  });
};

launch();

document.getElementById('add-btn').addEventListener('click', () => {
  const taskListStore = getList();
  addTaskArray(taskListStore);
});

document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.classList.contains('replace-task')) {
    e.target.addEventListener('change', () => {
      editTask(e.target.parentElement);
    });
  }
});

// document.querySelector('ul').addEventListener('click', (e) => {
//   removeTaskArray(e.target.parentElement);
//   sort();
// });
