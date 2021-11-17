import { isEscapeKey, isEnterKey } from './utils.js';

const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const img = bigPicture.querySelector('.big-picture__img img');
const closeButton = document.querySelector('.big-picture__cancel');
const likes = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsBlock = bigPicture.querySelector('.social__comments'); //контейнер
const comments = bigPicture.querySelectorAll('.social__comment');
const socialCaption = bigPicture.querySelector('.social__caption'); //описание фото
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');

// create comments list

const createComments = (photoComments) => {
  const fragment = document.createDocumentFragment();

  photoComments.forEach((item) => {
    const newComment = comments[0].cloneNode(true);

    newComment.querySelector('.social__picture').src = item.avatar;
    newComment.querySelector('.social__picture').alt = item.name;
    newComment.querySelector('.social__text').textContent = item.message;

    fragment.appendChild(newComment);
  });

  comments.forEach((item) => item.remove());

  return fragment;
};

// esc close
const onDocumentEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

// close
// const onCloseButtonClick = () => closeBigPicture();

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentEsc);
  closeButton.removeEventListener('click', closeBigPicture);
};

closeButton.addEventListener('click', () => {
  closeBigPicture();
});

// open

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.hidden = true;
  commentsLoader.hidden = true;

  document.addEventListener('keydown', onDocumentEsc);
};

//enter open

// переменная для миниатюр.addEventListener('click', openBigPicture());
const onDocumentEnter = () =>
  document.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      openBigPicture();
    }
  });

// create popup

const createPopupPicture = (picture) => {
  openBigPicture();

  img.src = picture.url;
  likes.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  commentsBlock.appendChild(createComments(picture.comments));
  socialCaption.textContent = picture.description;
};

export { createPopupPicture };
