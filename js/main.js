const getRandomInteger = (x, y) => {
  x = Math.ceil(x);
  y = Math.floor(y);
  if (x > y) {
    [x, y] = [y, x];
  }
  return Math.floor(Math.random() * (y - x + 1)) + x;
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
