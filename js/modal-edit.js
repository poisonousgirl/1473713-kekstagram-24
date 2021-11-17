import { isEscapeKey, isEnterKey } from './utils.js';

const imageOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;

const openForm = () => {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeForm = () => {
  body.classList.remove('modal-open');
  imageOverlay.classList.add('hidden');
};
export {openForm};
