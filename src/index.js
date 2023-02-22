import './style.css';
import populate from './injectHtml.js';
import todoTasks from './taskArray.js';

todoTasks.forEach((tasksElement) => {
  populate(tasksElement);
});
