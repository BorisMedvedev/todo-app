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


