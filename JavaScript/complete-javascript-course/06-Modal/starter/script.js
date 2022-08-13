'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('button clicked');
};
console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
btnClosemodal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
const keyDown = document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) closeModal();
  }
});
