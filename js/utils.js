export const generateId = () => {
  let id = '';
  for (let i = 0; i < 14; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
};


export const capitalizeWords = (str) => {
  const words = str.toLowerCase().split(' ');
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(' ');
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


