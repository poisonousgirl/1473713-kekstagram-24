import { getRandomPositiveInteger } from './utils.js';

const URL_MIN_RANGE = 1;
const URL_MAX_RANGE = 25;
const LIKES_MIN_RANGE = 15;
const LIKES_MAX_RANGE = 200;
const COMMENTS_MIN_RANGE = 1;
const COMMENTS_MAX_RANGE = 8;
const ID_MIN_RANGE = 1;
const ID_MAX_RANGE = 10000;
const DESCRIPTION = ['Красивое', 'Сделал сегодня утром', 'Попробовал новый фильтр', 'Что думаете?', 'Это лучшее, что я видел за всю свою жизнь!', 'Фото не передает запахи... оно и к лучшему', 'Взглад под новым углом', 'Черно-белое или цветное?', 'Не могу налюбоваться, ну что за красота!'];
const AVATAR_MIN_RANGE = 1;
const AVATAR_MAX_RANGE = 6;
const MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];
const NAME = ['Зевс', 'Посейдон', 'Гефест', 'Апполон', 'Гермес', 'Арес', 'Гера', 'Афина', 'Аид', 'Деметра', 'Персефона', 'Афродита', 'Дионис', 'Артемида', 'Гестия'];
const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;
const photoArray = [];
const likesArray = [];
const commentsArray = [];
const idArray = [];
const avatarArray = [];

//создание массива
const arrayGenerator = (array, min, max) => {
  for (let index = min - 1; index < max; index++) {
    array.push(index + 1);
  }
  return array;
};

arrayGenerator(photoArray, URL_MIN_RANGE, URL_MAX_RANGE);
arrayGenerator(likesArray, LIKES_MIN_RANGE, LIKES_MAX_RANGE);
arrayGenerator(commentsArray, COMMENTS_MIN_RANGE, COMMENTS_MAX_RANGE);
arrayGenerator(idArray, ID_MIN_RANGE, ID_MAX_RANGE);
arrayGenerator(avatarArray, AVATAR_MIN_RANGE, AVATAR_MAX_RANGE);

// случайное уникальное число из массива
const GET_UNIC_ARRAY_INT = (array) => {
  const random = getRandomPositiveInteger(0, array.length - 1);
  return array.splice(random, 1);
};
// console.log(GET_UNIC_ARRAY_INT);

//функция создания объекта комментария
const createCommentsData = () => {
  const unicID = GET_UNIC_ARRAY_INT(idArray);
  const unicAvatar = avatarArray[getRandomPositiveInteger(0, avatarArray.length - 1)];
  return {
    id: unicID[0],
    avatar: `img/avatar- ${unicAvatar} .svg`,
    message: MESSAGE[getRandomPositiveInteger(0, MESSAGE.length - 1)],
    name: NAME[getRandomPositiveInteger(0, NAME.length - 1)],
  };
};

const keysComment = [
  'id',
  'avatar',
  'message',
  'name',
];

keysComment.forEach((key) => {
  createCommentsData[key];
});

//функция создания объектов описания фото
const createPhotoData = () => {
  const unicID = idArray.splice(0, 1);
  const unicPhotoID = GET_UNIC_ARRAY_INT(photoArray);
  const commentsGen = Array.from({length: commentsArray[getRandomPositiveInteger(0, commentsArray.length - 1)]}, createCommentsData);
  return {
    id: unicID[0],
    url: `photos/${unicPhotoID}.jpg`,
    description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
    likes: likesArray[getRandomPositiveInteger(0, likesArray.length - 1)],
    comments: commentsGen,
  };
};

const keysPhoto = [
  'id',
  'url',
  'description',
  'likes',
  'comments',
];

keysPhoto.forEach((key) => {
  createPhotoData[key];
});

//создание массива объектов описания фото
const similarPhotoDescriptions = () => Array.from({length: SIMILAR_PHOTO_DESCRIPTION_COUNT}, createPhotoData);

export {similarPhotoDescriptions};
