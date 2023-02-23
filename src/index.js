import './style.css';
import populate from './modules/injectHtml';
import {
  getList, addTaskArray, removeTaskArray, sort, editTask, delAppear, deselect,
} from './modules/actions';

// launch old list

const firstStart = () => {
  const taskListStore = getList();
  taskListStore.forEach((element) => {
    populate(element);
  });
};

firstStart();

// Add a task

document.getElementById('add-btn').addEventListener('click', () => {
  const taskListStore = getList();
  addTaskArray(taskListStore);
});

//  switch selection out of main ul

document.querySelector('body').addEventListener('click', (e) => {
  if (!e.target.classList.contains('replace-task')) {
    deselect();
  }
});

//  edit and delete a task

document.querySelector('ul').addEventListener('click', (e) => {
  deselect();
  e.target.parentElement.children[1].addEventListener('click', () => {
    removeTaskArray(e.target.parentElement.parentElement);
    sort();
  });

  if (e.target.classList.contains('replace-task')) {
    delAppear(e.target.parentElement);
    e.target.addEventListener('change', () => {
      editTask(e.target.parentElement);
      sort();
    });
  }
});
