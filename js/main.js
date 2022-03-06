const getRandomInteger = (x, y) => {
  const lower = Math.ceil(Math.min(Math.abs(x), Math.abs(y)));
  const upper = Math.floor(Math.max(Math.abs(x), Math.abs(y)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

getRandomInteger(1,110);

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

getRandomFloat(1.1234, 50.4321, 3);

// const getRandomArray = (arr) => {
//   const maxLength = arr.length;
//   const arrayLength = getRandomInteger(1, maxLength);
//   const array = [];
//   while (array.length < arrayLength) {
//     const elementIndex = getRandomInteger(0, maxLength - 1);
//     const element = arr[elementIndex];
//     if (!array.includes(element)) {
//       array.push(element);
//     }
//   }
//   return array;
// };

const getRandomArray = (initialArray) => initialArray.sort(() => Math.random() - 0.5).slice(0, getRandomInteger(1, initialArray.length));

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const cardQuantity = 10;
const latMin = 35.65000;
const latMax = 35.70000;
const lngMin = 139.70000;
const lngMax = 139.80000;
const maxDigits = 5;
const usersId = Array.from({length: cardQuantity},(v, i) => ++i);

const getImageNumber = () => {
  const imgNumber = usersId.splice(0, 1);
  return imgNumber < 10 ? `0${imgNumber}` : imgNumber;
};

const createCard = () => {
  const lat = getRandomFloat(latMin, latMax, maxDigits);
  const lng = getRandomFloat(lngMin, lngMax, maxDigits);
  return {
    author: {
      avatar: `img/avatars/user${getImageNumber()}.png`,
    },
    offer: {
      title: 'ЗАГОЛОВОК ПРЕДЛОЖЕНИЯ',
      address: `${lat}, ${lng}`,
      price: getRandomInteger(1000, 10000),
      type: TYPES[getRandomInteger(0, 4)],
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 6),
      checkin: CHECKOUTS[getRandomInteger(0, 2)],
      checkout: CHECKOUTS[getRandomInteger(0, 2)],
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

createCards(cardQuantity);
