const getRandomInteger = (x, y) => {
  x = Math.ceil(x);
  y = Math.floor(y);
  if (x <= y) {
    return Math.floor(Math.random() * (x - y + 1)) + y;
  }
  if (x === 0) {
    return Math.floor(Math.random() * y);
  }
  if (y === 0) {
    return Math.floor(Math.random() * x);
  }
  return Math.floor(Math.random() * (y - x + 1)) + x;
};

getRandomInteger(1,110);

const getRandomFloat = (x, y, maxDigits = 0) => {
  if (x < 0 || y < 0) {
    return 0;
  }
  const digitsDegree = 10 ** maxDigits;
  if (x > y) {
    return Math.floor((Math.random() * (x - y) + y) * digitsDegree) / digitsDegree;
  }
  return Math.floor((Math.random() * (y - x) + x) * digitsDegree) / digitsDegree;
};

getRandomFloat(1.1234, 50.4321, 3);
