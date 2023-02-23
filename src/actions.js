//  add new task to the array
import populate from './injectHtml';

const save = (taskList) => localStorage.setItem('taskListArray', JSON.stringify(taskList));

const getList = () => JSON.parse(localStorage.getItem('taskListArray')) || [];

const sort = () => {
  const array = getList();
  const list = document.querySelectorAll('li')
  array.forEach((element, index) => {
    array[index].index = index;
    list[index].id = `list-${index}`
  });
  save(array);
};

const addTaskArray = (taskList) => {
  const taskInput = document.getElementById('task-input').value;
  if (taskInput) {
    taskList.push({ description: taskInput, completed: false, index: taskList.length });
    populate(taskList[taskList.length - 1]);
    save(taskList);
    document.getElementById('task-input').value = '';
  }
};

const removeTaskArray = (element) => {
  console.log(element)
  if (element.classList.contains('list-container')) {
    element.remove();
    const taskListArray = getList();
    taskListArray.forEach((task, index) => {
      if (index === parseInt(element.id[element.id.length - 1], 10)) {
        taskListArray.splice(index, 1);
        save(taskListArray);
        sort();
      }
    });
  }
};

const editTask = (elem) => {
  const array = getList();
  const list = document.querySelectorAll('.replace-task')
  array.forEach((element, index) => {
    array[index].description = list[index].value;
    if (array[index].description === '') {
      removeTaskArray(elem.parentElement);
    }
  });
  save(array);
};

export { addTaskArray, removeTaskArray, save, getList, sort, editTask };
