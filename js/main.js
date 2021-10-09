function generateRandomNumber(from, to) {
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
console.log('here is your random number: ' + generateRandomNumber(1, 10));

const comment = document.querySelector('.docsocial__footer-text');

function checkCommentSize(field, length) {
  field.length > length ? false: true;
}
 console.log(checkCommentSize(comment, 140));
