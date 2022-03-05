const getRandomInteger = (x, y) => {
  const lower = Math.ceil(Math.min(Math.abs(x), Math.abs(y)));
  const upper = Math.floor(Math.max(Math.abs(x), Math.abs(y)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

getRandomInteger(1,110);

const getRandomFloat = (x, y, maxDigits = 0) => {
  if (x < 0 || y < 0) {
    throw new Error('Отрицательный параметр');
  }
  const digitsDegree = 10 ** maxDigits;
  if (x > y) {
    [x, y] = [y, x];
  }
  return Math.floor((Math.random() * (y - x) + x) * digitsDegree) / digitsDegree;
};

getRandomFloat(1.1234, 50.4321, 3);

const getRandomArray = (arr) => {
  const maxLength = arr.length;
  const arrayLength = getRandomInteger(1, maxLength);
  const array = [];
  while (array.length < arrayLength) {
    const elementIndex = getRandomInteger(0, maxLength - 1);
    const element = arr[elementIndex];
    if (!array.includes(element)) {
      array.push(element);
    }
  }
  return array;
};

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const ID = Array.from({length: 10},(v, i) => ++i);

const getImageNumber = () => {
  const imgNumber = ID.splice(0, 1);
  return imgNumber < 10 ? `0${imgNumber}` : imgNumber;
};

const createCard = () => {
  const lat = getRandomFloat(35.65000, 35.70000, 5);
  const lng = getRandomFloat(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: `img/avatars/user${getImageNumber()}.png`,
    },
    offer: {
      title: 'ЗАГОЛОВОК ПРЕДЛОЖЕНИЯ',
      address: `${lat}, ${lng}`,
      price: getRandomInteger(1000, 10000),
      type: TYPE[getRandomInteger(0, 4)],
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 6),
      checkin: CHECKOUT[getRandomInteger(0, 2)],
      checkout: CHECKOUT[getRandomInteger(0, 2)],
      features: getRandomArray(FEATURES),
      description: 'Очень хорошее помещение',
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    }
  };
};

const createCardsArray = (quantity) => Array.from({length: quantity}, createCard);

createCardsArray(10);
