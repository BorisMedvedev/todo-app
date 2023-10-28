import {loadUserTasks} from '../utils.js';

export const createModalForm = () => {
  const overlay = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalTitle = document.createElement('h3');
  const modalForm = document.createElement('form');
  const input = document.createElement('input');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  cancelBtn.type = 'button';
  input.placeholder = 'Введите свое имя';
  saveBtn.classList.add('btn', 'btn-primary', 'mb-3');
  cancelBtn.classList.add('btn', 'btn-danger');
  modalTitle.classList.add('modal-title');
  overlay.classList.add('overlay');
  modalContent.classList.add('modal-content');
  modalForm.classList.add('modal-form');
  input.classList.add('modal-input');

  modalTitle.textContent = 'Введите свое имя';
  saveBtn.textContent = 'Войти';
  cancelBtn.textContent = 'Отмена';

  modalForm.append(input, saveBtn, cancelBtn);
  modalContent.append(modalTitle, modalForm);
  overlay.append(modalContent);

  document.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === cancelBtn) {
      overlay.remove();
    }
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loadUserTasks(input.value);
  });

  return {
    overlay,
    modalForm,
    input,
    saveBtn,
    cancelBtn,
  };
};
