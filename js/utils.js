// random positive number from range

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//random array
const getRandomArrayelement = (elements) => {
  elements[getRandomPositiveInteger(0, elements.length - 1)];
};

// check length

function checkStringLength (string, length) {
  return string.length <= length;
}

// close on esc

const isEscapeKey = (evt) => {
  evt.key === 'Escape' || evt.key === 'Esc';
};

//open on enter

const isEnterKey = (evt) => {
  evt.key === 'Enter';
};

export {getRandomPositiveInteger, getRandomArrayelement, isEscapeKey, isEnterKey};

checkStringLength;
