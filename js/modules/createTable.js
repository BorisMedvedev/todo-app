export const createTable = () => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const theadTr = document.createElement('tr');
  const numberTh = document.createElement('th');
  const taskTh = document.createElement('th');
  const statusTh = document.createElement('th');
  const actionTh = document.createElement('th');
  const tbody = document.createElement('tbody');

  table.className = 'table table-hover table-bordered';

  statusTh.style.width = '100px';
  actionTh.style.width = '212px';

  numberTh.textContent = '№';
  taskTh.textContent = 'Задача';
  statusTh.textContent = 'Статус';
  actionTh.textContent = 'Действие';

  theadTr.append(numberTh, taskTh, statusTh, actionTh);
  thead.append(theadTr);
  table.append(thead, tbody);

  return {
    table,
    tbody,
  };
};
