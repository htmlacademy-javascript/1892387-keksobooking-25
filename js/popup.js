let popupMessage;

const isEscapeKey = (evt) => evt.key === 'Escape';

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

function closePopup() {
  document.querySelector('.popup').remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

const onPopupClick = (elementClassName) => {
  document.body.append(popupMessage);
  document.querySelector(`.${elementClassName}`).addEventListener('click', closePopup);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupClick);
};

const successPopup = () => {
  popupMessage = document.querySelector('#success').content.cloneNode(true);
  onPopupClick();
};

const errorPopup = () => {
  popupMessage = document.querySelector('#error').content.cloneNode(true);
  onPopupClick();
};

export {successPopup, errorPopup, closePopup};
