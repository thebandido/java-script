const openBtn = document.querySelector(`[data-action="open-modal"]`);
openBtn.addEventListener(`click`, openModal);

const closeBtn = document.querySelector(`button[data-action="closeModal"]`);
closeBtn.addEventListener(`click`, closeModal);

const backDrop = document.querySelector(`.backdrop-js`);
backDrop.addEventListener(`click`, backDropAction);

function openModal() {
  document.body.classList.add(`show-modal`);
  window.addEventListener(`keypress`, keyAction);
}

function closeModal() {
  document.body.classList.remove(`show-modal`);
  window.removeEventListener(`keypress`, keyAction);
}

function backDropAction(element) {
  if (element.currentTarget !== element.target) {
    return;
  }
  closeModal();
}

function keyAction(element) {
  if (element.code !== `KeyC`) {
    return;
  }
  closeModal();
}
