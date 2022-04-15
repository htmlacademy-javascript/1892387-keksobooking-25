import {setUserFormSubmit} from './form-validator.js';
import {getData} from './api.js';
import './form.js';
import {createdMarker} from './map.js';
import {showError} from './util.js';
import {OFFERS_COUNT} from './data.js';
import {successPopup, errorPopup} from './popup.js';
import './slider.js';

getData((offers) => {
  offers.slice(0, OFFERS_COUNT).forEach((point) => createdMarker(point));
}, () => showError('Не удалось загрузить данные. Повторите попытку'));

setUserFormSubmit(successPopup, errorPopup);
