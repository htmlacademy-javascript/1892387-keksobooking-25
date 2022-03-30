import {getRandomInteger, getRandomFloat, getRandomArray, getRandomElement, getImageNumber} from './util.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const MAX_DIGITS = 5;
const PRICE_MIN = 1000;
const PRICE_MAX = 10000;
const ROOMS_MIN = 1;
const ROOMS_MAX = 5;
const GUESTS_MIN = 1;
const GUESTS_MAX = 6;
const capacityOptions = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};
const costOptions = {
  'palace': '10000',
  'flat': '1000',
  'house': '5000',
  'bungalow': '0',
  'hotel': '3000'
};

const createCard = () => {
  const lat = getRandomFloat(LAT_MIN, LAT_MAX, MAX_DIGITS);
  const lng = getRandomFloat(LNG_MIN, LNG_MAX, MAX_DIGITS);
  return {
    author: {
      avatar: `img/avatars/user${getImageNumber()}.png`,
    },
    offer: {
      title: 'ЗАГОЛОВОК ПРЕДЛОЖЕНИЯ',
      address: `${lat}, ${lng}`,
      price: getRandomInteger(PRICE_MIN, PRICE_MAX),
      type: getRandomElement(TYPES),
      rooms: getRandomInteger(ROOMS_MIN, ROOMS_MAX),
      guests: getRandomInteger(GUESTS_MIN, GUESTS_MAX),
      checkin: getRandomElement(CHECKOUTS),
      checkout: getRandomElement(CHECKOUTS),
      features: getRandomArray(FEATURES),
      description: 'Очень хорошее помещение',
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat,
      lng,
    }
  };
};

const createCards = (quantity) => Array.from({length: quantity}, createCard);

export {createCards, createCard, capacityOptions, costOptions};
