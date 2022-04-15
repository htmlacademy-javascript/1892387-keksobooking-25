import {marker, adForm} from './map.js';

const avatar = document.querySelector('#avatar');
const preview = document.querySelector('.ad-form-header__preview');
const avatarImg = preview.querySelector('img');
const photos = document.querySelector('#images');

const getFormDisable = (formClass) => {
  const form = document.querySelector(formClass);
  form.classList.add('ad-form--disabled');
  const interactiveComponents = form.children;
  for (let i = 0; i < interactiveComponents.length; i++) {
    interactiveComponents[i].setAttribute('disabled', 'disabled');
  }
};

const getFormActive = (formClass) => {
  const form = document.querySelector(formClass);
  form.classList.remove('ad-form--disabled');
  const interactiveComponents = form.children;
  for (let i = 0; i < interactiveComponents.length; i++) {
    interactiveComponents[i].removeAttribute('disabled');
  }
};

const resetForm = () => {
  adForm.reset();
  avatar.files.value = 'img/muffin-grey.svg';
  avatarImg.src = 'img/muffin-grey.svg';
  photos.files.value = '';
  const userPhotos = document.querySelectorAll('.photo');
  userPhotos.forEach((element) => element.remove());
  marker.setLatLng({
    lat: 35.6895000,
    lng: 139.6917100,
  });
};

export {getFormDisable, getFormActive, resetForm};
