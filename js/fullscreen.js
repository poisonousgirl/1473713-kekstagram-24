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

// open

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.hidden = true;
  commentsLoader.hidden = true;
};

// переменная для миниатюр.addEventListener('click', openBigPicture());


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


// create popup

const createPopupPicture = (picture) => {
  openBigPicture();

  img.src = picture.url;
  likes.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  commentsBlock.appendChild(createComments(picture.comments));
  socialCaption.textContent = picture.description;
};

// close

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

closeButton.addEventListener('click', closeBigPicture());

// esc close
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeBigPicture();
  }
});

export {createPopupPicture};
