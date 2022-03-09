const getRandomInteger = (x, y) => {
  const lower = Math.ceil(Math.min(Math.abs(x), Math.abs(y)));
  const upper = Math.floor(Math.max(Math.abs(x), Math.abs(y)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomFloat = (x, y, digitsNumber = 0) => {
  if (x < 0 || y < 0) {
    throw new Error('Отрицательный параметр');
  }
  const digitsDegree = 10 ** digitsNumber;
  if (x > y) {
    [x, y] = [y, x];
  }
  return Math.floor((Math.random() * (y - x) + x) * digitsDegree) / digitsDegree;
};

const getRandomArray = (elements) => elements.sort(() => Math.random() - 0.5).slice(0, getRandomInteger(1, elements.length));

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const CARD_QUANTITY = 10;
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
const usersIds = Array.from({length: CARD_QUANTITY},(v, i) => ++i);

const getImageNumber = () => {
  const imgNumber = usersIds.splice(0, 1);
  return imgNumber < 10 ? `0${imgNumber}` : imgNumber;
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

createCards(CARD_QUANTITY);
