import {onResetButtonClick} from './form.js';

const ERROR_TIME = 5000;

const getData = (onSuccess, onFail) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(onFail);
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        onResetButtonClick();
      } else {
        onFail('Форма не отправлена. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Форма не отправлена. Попробуйте ещё раз');
    });
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

export {getData, sendData, showError};
