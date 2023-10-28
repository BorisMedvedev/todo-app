import {createForm} from './modules/createForm.js';
import {createModalForm} from './modules/createModalForm.js';
import {createTable} from './modules/createTable.js';
import {createTableWrapper} from './modules/createTableWrapper.js';
import {createTitle} from './modules/createTitle.js';

const init = () => {
  const app = document.querySelector('.app-container');
  const mainTitle = createTitle('Todo App');
  const tableWrapper = createTableWrapper();
  const modal = createModalForm();


  document.body.append(modal.overlay);
  document.querySelector('.modal-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('.modal-input').value;
    const form = createForm(username);
    const table = createTable();
    app.classList.add(
        'vh-100',
        'w-100',
        'd-flex',
        'align-items-center',
        'justify-content-center',
        'flex-column',
    );
    tableWrapper.append(table.table);
    app.append(mainTitle, form.form, tableWrapper);
    modal.overlay.remove();
  });
};

init();

