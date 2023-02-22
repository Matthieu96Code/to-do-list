import './style.css';
import populate from './injectHtml';
import todoTasks from './taskArray';

todoTasks.forEach((tasksElement) => {
  populate(tasksElement);
});
