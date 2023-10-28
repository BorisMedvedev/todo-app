export const createTitle = (title) => {
  const mainTitle = document.createElement('h3');
  mainTitle.textContent = title;

  return mainTitle;
};
