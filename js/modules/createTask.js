import {loadUserTasks} from '../utils.js';

export const createTask = (data, username) => {
  const task = document.createElement('tr');
  const numTd = document.createElement('td');
  const taskNameTd = document.createElement('td');
  const statusTd = document.createElement('td');
  const buttonsTd = document.createElement('td');
  const btnDelete = document.createElement('button');
  const btnComplete = document.createElement('button');

  task.className = 'table-light';
  taskNameTd.className = 'task';
  btnDelete.className = 'btn btn-danger';
  btnComplete.className = 'btn btn-success';

  task.done = data.done;
  task.id = data.id;
  taskNameTd.textContent = data.name;

  btnDelete.textContent = 'Удалить';
  btnComplete.textContent = 'Завершить';

  buttonsTd.append(btnDelete, btnComplete);
  task.append(numTd, taskNameTd, statusTd, buttonsTd);

  if (!data.done) {
    task.className = 'table-light';
    statusTd.textContent = 'В процессе';
  } else {
    task.className = 'table-success';
    statusTd.textContent = 'Завершена';
  }

  btnDelete.addEventListener('click', () => {
    const array = loadUserTasks(username);
    console.log(array);
    if (confirm('Вы уверенны ?')) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === data.id) {
          console.log('ok');
        }
      }
    }
  });

  return task;
};


