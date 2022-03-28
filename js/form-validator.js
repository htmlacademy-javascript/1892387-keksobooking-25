const form = document.querySelector('.ad-form');
const roomNumber = document.querySelector('#room_number');
const roomCapacity = document.querySelector('#capacity');
const capacityOptions = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
}, false);

const validateRoomsAndGuests = () => capacityOptions[roomNumber.value].includes(roomCapacity.value)


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

form.addEventListener('submit', (evt) => {
  if(pristine.validate()) {
    return true;
  }
  evt.preventDefault();
});
