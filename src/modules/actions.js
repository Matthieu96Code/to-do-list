/* eslint-disable no-param-reassign */

import populate from './injectHtml';

// Save and get list function
const save = (taskList) => localStorage.setItem('taskListArray', JSON.stringify(taskList));
const getList = () => JSON.parse(localStorage.getItem('taskListArray')) || [];

// sort array function
const sort = () => {
  const arrayT = getList();
  const list = document.querySelectorAll('li');
  arrayT.forEach((element, index) => {
    arrayT[index].index = index + 1;
    list[index].id = `list-${index + 1}`;
    save(arrayT);
  });
};

// add to array function

const addTaskArray = (taskList) => {
  const taskInput = document.getElementById('task-input').value;
  if (taskInput) {
    taskList.push({ description: taskInput, completed: false, index: taskList.length });
    populate(taskList[taskList.length - 1]);
    save(taskList);
    document.getElementById('task-input').value = '';
  }
};

// remove from array function

const removeTaskArray = (element) => {
  if (element.classList.contains('list-container')) {
    const taskListArray = getList();
    taskListArray.forEach((task, index) => {
      if (index + 1 === parseInt(element.id[element.id.length - 1], 10)) {
        taskListArray.splice(index, 1);
        save(taskListArray);
        sort();
      }
    });
    element.remove();
  }
};

// edit in array function

const editTask = (elem) => {
  let array = getList();
  const list = document.querySelectorAll('.replace-task');
  array.forEach((element, index) => {
    array[index].description = list[index].value;
    save(array);
    if (array[index].description === '') {
      removeTaskArray(elem.parentElement);
      array = getList();
    }
  });
};

// add interaction to field function

const delAppear = (element) => {
  element.children[0].style.backgroundColor = 'beige';
  element.parentElement.style.backgroundColor = 'beige';
  element.style.backgroundColor = 'beige';
  element.children[1].children[0].textContent = 'delete';
};

// remove interaction to field function

const deselect = () => {
  document.querySelectorAll('label').forEach((child1) => {
    child1.style.backgroundColor = 'white';
    child1.children[0].style.backgroundColor = 'white';
    child1.parentElement.style.backgroundColor = 'white';
    child1.children[1].children[0].textContent = 'more_vert';
  });
};

export {
  addTaskArray, removeTaskArray, save, getList, sort, editTask, delAppear, deselect,
};
