import './style.css';
import populate from './modules/injectHtml';
import {
  getList, addTaskArray, removeTaskArray, sort, editTask, delAppear, deselect,
} from './modules/actions';
import { checkedTask, clearAllChecked } from './modules/interact';

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
  sort();
});

//  switch selection between body element

document.querySelector('body').addEventListener('click', (e) => {
  if (!e.target.classList.contains('replace-task')) {
    deselect();
  }
});

//  edit and delete a task

document.querySelector('ul').addEventListener('click', (e) => {
  // switch selection between ul element
  deselect();
  e.target.parentElement.children[1].addEventListener('click', () => {
    removeTaskArray(e.target.parentElement.parentElement);
    sort();
  });

  // select and edit
  if (e.target.classList.contains('replace-task')) {
    delAppear(e.target.parentElement);
    e.target.addEventListener('change', () => {
      editTask(e.target.parentElement);
      sort();
    });
  }
});

// clear all task complete

document.querySelector('ul').addEventListener('click', (check) => {
  if (check.target.classList.contains('list-check')) {
    check.target.addEventListener('change', () => {
      checkedTask(check.target);
    });
  }
});

document.getElementById('clear-task').addEventListener('click', () => {
  clearAllChecked();
  sort();
});
