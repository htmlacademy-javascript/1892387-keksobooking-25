const ERROR_TIME = 5000;
const submitButton = document.querySelector('.ad-form__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const showError = (error) => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error-container');
  errorContainer.textContent = error;

  document.body.append(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, ERROR_TIME);
};

export {showError, blockSubmitButton, unblockSubmitButton};
