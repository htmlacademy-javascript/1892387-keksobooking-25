import {capacityOptions, costOptions} from './data.js';

const form = document.querySelector('.ad-form');
const roomNumber = form.querySelector('#room_number');
const roomCapacity = form.querySelector('#capacity');
const roomType = form.querySelector('#type');
const roomCost = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
}, false);

const validateRoomsAndGuests = () => capacityOptions[roomNumber.value].includes(roomCapacity.value);
const validateCost = () => parseInt(roomCost.value, 10) >= parseInt(costOptions[roomType.value], 10);
const getValidateCostErrorMessage = () => `Минимальная цена за данный тип жилья ${costOptions[roomType.value]}`;

pristine.addValidator(
  roomNumber,
  validateRoomsAndGuests,
  'Количество комнат должно быть меньше или равно количеству гостей'
);

pristine.addValidator(
  roomCapacity,
  validateRoomsAndGuests,
  'Количество гостей должно быть меньше или равно количеству комнат'
);

function onTypeChange () {
  roomCost.placeholder = costOptions[this.value];
  roomCost.setAttribute('min', costOptions[this.value]);
  pristine.validate(roomCost);
}

function onTimeInChange () {
  timeOut.value = timeIn.value;
}

function onTimeOutChange () {
  timeIn.value = timeOut.value;
}

timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);

pristine.addValidator(
  roomCost,
  validateCost,
  getValidateCostErrorMessage
);

roomType.addEventListener('change', onTypeChange);

form.addEventListener('submit', (evt) => {
  if(pristine.validate()) {
    return true;
  }
  evt.preventDefault();
});
