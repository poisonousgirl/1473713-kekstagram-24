// рандомное положительное число из диапазона

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
export {getRandomPositiveInteger};

// проверка длины комментария

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength;
