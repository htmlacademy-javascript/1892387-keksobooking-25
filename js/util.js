const CARD_QUANTITY = 10;
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


const usersIds = Array.from({length: CARD_QUANTITY},(v, i) => ++i);

const getImageNumber = () => {
  const imgNumber = usersIds.splice(0, 1);
  return imgNumber < 10 ? `0${imgNumber}` : imgNumber;
};

export {getRandomInteger, getRandomFloat, getRandomArray, getRandomElement, getImageNumber, CARD_QUANTITY};
