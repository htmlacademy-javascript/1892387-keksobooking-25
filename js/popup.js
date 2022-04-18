let popupMessage;

const isEscapeKey = (evt) => evt.key === 'Escape';

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onPopupEscKeydown();
  }
};

function onPopupClick() {
  document.querySelector('.popup').remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupClick);
};

const showPopup = () => {
  document.body.append(popupMessage);
  document.addEventListener('click', onPopupClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const showSuccessPopup = () => {
  popupMessage = document.querySelector('#success').content.cloneNode(true);
  showPopup();
};

const showErrorPopup = () => {
  popupMessage = document.querySelector('#error').content.cloneNode(true);
  showPopup();
};

export {showSuccessPopup, showErrorPopup};
