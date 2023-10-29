import {createTask} from './modules/createTask.js';

export const generateId = () => {
  let id = '';
  for (let i = 0; i < 14; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
};

export const loadUserTasks = (username) => {
  let userTasks = [];
  if (localStorage.getItem(username)) {
    const userTasksJson = localStorage.getItem(username);
    userTasks = JSON.parse(userTasksJson);
  } else {
    localStorage.setItem(username, JSON.stringify(userTasks));
  }

  return userTasks;
};


export const addUserTask = (username, newTask) => {
  const userTasks = loadUserTasks(username);
  userTasks.push(newTask);
  localStorage.setItem(username, JSON.stringify(userTasks));
};


export const renderUserTasks = (userTasks) => {
  for (const user of userTasks) {
    document.querySelector('tbody').append(createTask(user));
  }
};

export const updateRowNumbers = () => {
  const table = document.querySelector('table');
  const rows = table.getElementsByTagName('tr');
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const numberCell = row.getElementsByTagName('td')[0];
    numberCell.textContent = i;
  }
};
