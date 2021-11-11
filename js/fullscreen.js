const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const img = bigPicture.querySelector('.big-picture__img').querySelector('img');
const closeButton = document.querySelector('.big-picture__cancel');
const likes = document.bigPicture.querySelector('.likes-count');
const commentsCount = document.bigPicture.querySelector('.comments-count');
const commentsBlock = document.bigPicture.querySelector('.social__comments');
const socialCaption = document.bigPicture.querySelector('.social-caption');
const commentsLoader = document.bigPicture.querySelector('.comments-loader');
const socialCommentCount = document.bigPicture('.social__comment-count');



// create fullsize photo

const createBigPicture = (picture) => {
  img.src = picture.url;
  likes.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  commentsBlock.textContent = '';
  commentsBlock.appendChild(createComments(picture.comments));
  socialCaption.textContent = picture.description;
}

// create comments list
const createComments = (comments) => {
  commentsBlock.innerHTML = '';
  commentsLoader.forEach()

};

// opener

const openBigPicture = (thumbnail, photo) => {
  thumbnail.addEventListener('click', function() {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    socialCommentCount.hidden = true;
    commentsLoader.hidden = true;
  });
};

// closer

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
}

// esc closing
document.addEventListener('keydown', function(evt) {
  if (evt.key === 27) {
    closeBigPicture();
  }
});



// Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:

// Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

// Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

// Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.

// Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

// <li class="social__comment">
//     <img
//         class="social__picture"
//         src="{{аватар}}"
//         alt="{{имя комментатора}}"
//         width="35" height="35">
//     <p class="social__text">{{текст комментария}}</p>
// </li>
// Описание фотографии description вставьте строкой в блок .social__caption.

// После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

// После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

// Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

