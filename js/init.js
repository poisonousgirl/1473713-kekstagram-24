import { similarPhotoDescriptions } from './data.js';
import { appendData } from './minis.js';
import { createPopupPicture } from './fullscreen.js';
import { getRandomPositiveInteger } from './utils.js';

const data = similarPhotoDescriptions();

const init = () => {
  appendData(data);
  // createPopupPicture(data[getRandomPositiveInteger(0, data.length - 1)]);
};

export { init };
