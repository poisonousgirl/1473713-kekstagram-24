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

const URL_MIN_RANGE = 1;
const URL_MAX_RANGE = 25;
const LIKES_MIN_RANGE = 15;
const LIKES_MAX_RANGE = 200;
const COMMENTS_MIN_RANGE = 1;
const COMMENTS_MAX_RANGE = 8;
const ID_MIN_RANGE = 1;
const ID_MAX_RANGE = 10000;
const DESCRIPTION = ['Красивое', 'Сделал сегодня утром', 'Попробовал новый фильтр', 'Что думаете?', 'Это лучшее, что я видел за всю свою жизнь!', 'Фото не передает запахи... оно и к лучшему', 'Взглад под новым углом',]
const AVATAR_MIN_RANGE = 1;
const AVATAR_MAX_RANGE = 6;
const MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!',];
const NAME = ['Зевс', 'Посейдон', 'Гефест', 'Апполон', 'Гермес', 'Арес', 'Гера', 'Афина', 'Аид', 'Деметра', 'Персефона', 'Афродита', 'Дионис', 'Артемида', 'Гестия',];
const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;
const SIMILAR_COMMENTS_DESCRIPTION_COUNT = 15;
let photoArray = [];
let likesArray = [];
let commentsArray = [];
let idArray = [];
let avatarArray = [];

//создание массива
let arrayGenerator = (array, min, max) => {
  for (let i = min - 1; i < max; i++) {
    //idRange[i] = i + 1;
    array.push(i + 1);
  }
  return array;
}

arrayGenerator(photoArray, URL_MIN_RANGE, URL_MAX_RANGE);
arrayGenerator(likesArray, LIKES_MIN_RANGE, LIKES_MAX_RANGE);
arrayGenerator(commentsArray, COMMENTS_MIN_RANGE, COMMENTS_MAX_RANGE);
arrayGenerator(idArray, ID_MIN_RANGE, ID_MAX_RANGE);
arrayGenerator(avatarArray, AVATAR_MIN_RANGE, AVATAR_MAX_RANGE);

console.log(commentsArray, avatarArray);

// случайное уникальное число из массива
const GET_UNIC_ARRAY_INT = (array) => {
  // while (idArray.length > 0) {
  // idRandom = idArray[ _.random(0, idArray.length - 1)];
   let random = _.random(0, array.length - 1);
  // console.log(idArray[idRandom]);
  return array.splice(random, 1);
  // console.log(idArray);
}

const createCommentsData = () => {
  let unicID = GET_UNIC_ARRAY_INT(idArray);
  let unicAvatar = avatarArray[_.random(0, avatarArray.length - 1)];
  return {
    id: unicID[0],
    avatar: 'img/avatar-' + unicAvatar + '.svg',
    message: MESSAGE[_.random(0, MESSAGE.length - 1)],
    name: NAME[_.random(0, NAME.length - 1)],
  }
}
//создание объектов комментов
const similarCommentsDescriptions = Array.from({length: SIMILAR_COMMENTS_DESCRIPTION_COUNT}, createCommentsData);
console.log(similarCommentsDescriptions);

//функция создания объектов описания фото
const createPhotoData = () => {
  let unicID = idArray.splice(0, 1);
  let unicPhotoID = GET_UNIC_ARRAY_INT(photoArray);
  let commentsGen = Array.from({length: commentsArray[_.random(0, commentsArray - 1)]}, createCommentsData)
  return {
    id: unicID[0],
    url: 'photos/' + unicPhotoID + '.jpg',
    description: DESCRIPTION[_.random(0, DESCRIPTION.length - 1)],
    likes: likesArray[_.random(0, likesArray.length - 1)],
    comments: commentsGen,
  };
};

//создание массива объектов описания фото
const similarPhotoDescriptions = Array.from({length: SIMILAR_PHOTO_DESCRIPTION_COUNT}, createPhotoData);

console.log(similarPhotoDescriptions);

// let idArray = [];

// //создание массива
// let arrayGenerator = (array, min, max) => {
//   for (let i = min - 1; i < max; i++) {
//     //idRange[i] = i + 1;
//     array.push(i + 1);
//   }
//   return array;
// }
// console.log(arrayGenerator(idArray, 1, 25))

// let idRandom;
// const GET_UNIC_ARRAY = () => {
//   while (idArray.length > 0) {
//     // idRandom = idArray[ _.random(0, idArray.length - 1)];
//     idRandom = _.random(0, idArray.length - 1);
//     // console.log(idArray[idRandom]);
//     idArray.splice(idRandom, 1);
//     // console.log(idArray);
//   }
// }
