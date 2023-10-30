import {loadUserTasks, updateRowNumbers} from '../utils.js';

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
  btnDelete.className = 'btn btn-danger btn-delete';
  btnComplete.className = 'btn btn-success';

  task.done = data.done;
  task.id = data.id;
  taskNameTd.textContent = data.name;

  btnDelete.textContent = 'Удалить';
  btnComplete.textContent = 'Завершить';

  buttonsTd.append(btnDelete, btnComplete);
  task.append(numTd, taskNameTd, statusTd, buttonsTd);

  btnComplete.addEventListener('click', () => {
    const arrayNew = loadUserTasks(username);
    for (let i = 0; i < arrayNew.length; i++) {
      if (arrayNew[i].id === data.id) {
        data.done = !data.done;
        arrayNew[i].done = !arrayNew[i].done;
      }
    }

    if (!data.done) {
      task.className = 'table-light';
      statusTd.textContent = 'В процессе';
      taskNameTd.className = 'task';
      btnComplete.textContent = 'Завршить';
    } else {
      task.className = 'table-success';
      taskNameTd.className = 'text-decoration-line-through';
      statusTd.textContent = 'Завершена';
      btnComplete.textContent = 'Отменить';
    }
    localStorage.setItem(username, JSON.stringify(arrayNew));
  });


  btnDelete.addEventListener('click', () => {
    const array = loadUserTasks(username);
    if (confirm('Вы уверены ?')) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === data.id) {
          array.splice(i, 1);
          task.remove();
        }
      }
    }
    localStorage.setItem(username, JSON.stringify(array));
    updateRowNumbers();
  });

  if (!data.done) {
    task.className = 'table-light';
    statusTd.textContent = 'В процессе';
    taskNameTd.className = 'task';
    btnComplete.textContent = 'Завршить';
  } else {
    task.className = 'table-success';
    statusTd.textContent = 'Завершена';
    taskNameTd.className = 'text-decoration-line-through';
    btnComplete.textContent = 'Отменить';
  }

  return task;
};
