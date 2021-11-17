// import {similarPhotoDescriptions} from './data.js';

// const similarMinis = similarPhotoDescriptions();
const similarPhotoElement = document.querySelector('.pictures');

const appendData = (similarMinis) => {

  const similarPhotoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');


  const similarListFragment = document.createDocumentFragment();

  similarMinis.forEach(({ url, likes, comments}) => {
    const pictureElement = similarPhotoTemplate.cloneNode(true);
    const re = /\d+/g;
    pictureElement.dataset.id = re.exec(url);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.appendChild(pictureElement);
  });

  similarPhotoElement.appendChild(similarListFragment);
};

export { appendData};
export {similarPhotoElement};
