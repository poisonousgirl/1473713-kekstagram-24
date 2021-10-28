function generateRandomNumber(from, to) {
  if (from >= 0 && to > from) {
    from = Math.ceil(from);
    to = Math.floor(to);
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
  throw new Error('Число ' + to + ' должно быть больше чем ' + from + ' и оба должны быть польжительными');
}
generateRandomNumber(1, 10);

const comment = document.querySelector('.social__footer-text');

// function checkCommentSize(field, length) {
//   if (typeof field === 'string') {
//     return field.length > length;
//   }
//   throw new Error('Not a string');
// }

// console.log(checkCommentSize(comment, 140));

const ID_MIN_RANGE = 1;
const ID_MAX_RANGE = 25;
const URL = '';
const LIKES_RANGE = '';
const AVATAR_RANGE = '';
const MESSAGE = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!',
];
const NAME = [
  'Зевс',
  'Посейдон',
  'Гефест',
  'Апполон',
  'Гермес',
  'Арес',
  'Гера',
  'Афина',
  'Аид',
  'Деметра',
  'Персефона',
  'Афродита',
  'Дионис',
  'Артемида',
  'Гестия',
];
const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;

const createPhotoData = () => {

  return {
    id: 1,
    url: 'photos/{{1}}.jpg', //1-25
    description: '',
    likes: '', //15-200
    comment: [ {
      id: 15,
      avatar: 'img/avatar-{{случайное число от 1 до 6}}.svg',
      message: MESSAGE[_.random(0, NAME.length - 1)],
      name: NAME[_.random(0, MESSAGE.length - 1)],
    }
    ],
  };
};

const similarPhotoDescriptions = Array.from({length: SIMILAR_PHOTO_DESCRIPTION_COUNT}, createPhotoData);

console.log(similarPhotoDescriptions);

let idArray = [];

//создание массива
let arrayGenerator = (array, min, max) => {
  for (let i = min - 1; i < max; i++) {
    //idRange[i] = i + 1;
    array.push(i + 1);
  }
  return array;
}
console.log(arrayGenerator(idArray, 1, 25))

let idRandom;
while (idArray.length > 0) {
  // idRandom = idArray[ _.random(0, idArray.length - 1)];
  idRandom = _.random(0, idArray.length);
  idArray.splice(idRandom, 1);
  console.log(idArray[idRandom]);
  console.log(idArray);
}
