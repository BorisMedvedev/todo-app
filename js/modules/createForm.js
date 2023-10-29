import {addUserTask, generateId, updateRowNumbers,
  loadUserTasks} from '../utils.js';
import {createTask} from './createTask.js';

export const createForm = (username) => {
  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const buttonSave = document.createElement('button');
  const buttonClear = document.createElement('button');

  form.className = 'd-flex align-items-center mb-3';
  label.className = 'form-group me-3 mb-0';
  input.className = 'form-control';
  buttonSave.className = 'btn btn-primary me-3';
  buttonClear.className = 'btn btn-warning';
  buttonSave.disabled = true;
  input.type = 'text';
  input.placeholder = 'ввести задачу';

  buttonSave.type = 'submit';
  buttonSave.textContent = 'Сохранить';
  buttonClear.type = 'reset';
  buttonClear.textContent = 'Очистить';

  label.append(input);
  form.append(label, buttonSave, buttonClear);

  input.addEventListener('input', () => {
    if (input.value) {
      buttonSave.disabled = false;
    } else {
      buttonSave.disabled = true;
    }
  });


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = {};
    newTask.id = generateId();
    newTask.name = input.value.trim();
    newTask.done = false;

    input.value = '';
    buttonSave.disabled = true;
    loadUserTasks(username);
    addUserTask(username, newTask);
    document.querySelector('tbody').append(createTask(newTask));
    updateRowNumbers();
  });

  return {
    form,
    input,
    buttonSave,
    buttonClear,
  };
};


