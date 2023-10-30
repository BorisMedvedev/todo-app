import {loadUserTasks, updateRowNumbers} from './utils.js';
import {createForm} from './modules/createForm.js';
import {createModalForm} from './modules/createModalForm.js';
import {createTable} from './modules/createTable.js';
import {createTableWrapper} from './modules/createTableWrapper.js';
import {createTask} from './modules/createTask.js';
import {createTitle} from './modules/createTitle.js';

const init = () => {
  const app = document.querySelector('.app-container');
  const tableWrapper = createTableWrapper();
  const modal = createModalForm();

  document.body.append(modal.overlay);
  document.querySelector('.modal-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('.modal-input').value;
    const userArray = loadUserTasks(username);
    const mainTitle = createTitle(`Todo App`);
    const form = createForm(username);
    const table = createTable();
    const infoUser = document.createElement('h3');
    infoUser.textContent = `Вы вошли под логином: "${username}"`;
    infoUser.classList.add('info-user');
    app.classList.add(
        'vh-100',
        'w-100',
        'd-flex',
        'align-items-center',
        'justify-content-center',
        'flex-column',
    );
    document.body.append(infoUser);
    tableWrapper.append(table.table);
    app.append(mainTitle, form.form, tableWrapper);

    modal.overlay.remove();
    for (const user of userArray) {
      const newUser = createTask(user, username);
      document.querySelector('tbody').append(newUser);
      if (user.done) {
        const done = document.querySelectorAll('.table-light');
        done.forEach(element => {
          element.className = 'table-success';
        });
      }
    }
    updateRowNumbers();
  });
};

init();

