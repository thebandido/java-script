const form = document.querySelector(`.js-from-css`);
form.addEventListener(`click`, someAction);

function someAction(element) {
  if (event.target.classList.value !== `signUpButton`) {
    return;
  }
  event.preventDefault();

  const fromData = new FormData(event.currentTarget);
  const collectedData = {};
  fromData.forEach((value, name) => {
    collectedData[name] = value;
  });
  console.log(collectedData);
}

// form.addEventListener(`click`, openModal);

// function someAction(element) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   const formElem = form.elements;
//   const nameInput = form.elements.login;
//   const emailInput = form.elements.email;
//   const passwordInput = form.elements.password;
//   const termsCheckBox = form.elements.agreement;
//   const kycCheckBox = form.elements.kyc;
//   const radiola = form.elements.radiola;

//   const completedForm = {
//     [nameInput.name]: formElem.login.value,
//     [emailInput.name]: formElem.email.value,
//     [passwordInput.name]: formElem.password.value,

//     [termsCheckBox.name]: formElem.agreement.checked,
//     [kycCheckBox.name]: formElem.kyc.checked,

//     radiola: formElem.radiola.value,
//   };

//   console.log(completedForm);
// }

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
