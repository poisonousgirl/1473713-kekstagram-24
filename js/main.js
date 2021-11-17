import { similarPhotoDescriptions } from './data.js';
import { similarPhotoElement } from './minis.js';
import { createPopupPicture } from './fullscreen.js';
import {init} from './init.js';
import {openForm} from './modal-edit.js';
init();
openForm();

const openThumbnai = (evt) => {
  if (evt.target.closest('.picture')) {
    const element = evt.target.closest('.picture');
    const indexArray = element.dataset.id;

    createPopupPicture(similarPhotoDescriptions[indexArray]);
  }
};
// console.log(indexArray);

const picturesList = document.querySelector('.pictures');
picturesList.addEventListener('click', openThumbnai);
