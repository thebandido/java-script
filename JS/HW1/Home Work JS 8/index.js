const ulForm = document.querySelector(`#ingredients`);
const ulForm2 = document.querySelector(`#gallery`);
const input = document.querySelector(`#name-input`);
const span = document.querySelector(`#name-output`);
const Increment = document.querySelector(`button[data-action="increment"]`);
const Decrement = document.querySelector(`button[data-action="decrement"]`);
const value = document.querySelector(`#value`);
const validInput = document.querySelector(`[data-length="6"]`);
const worm = document.querySelector(`#font-size-control`);
const textEditor = document.querySelector(`#text`);
const numberGen = document.querySelector(`#numNum`);
const divBoxes = document.querySelector(`#boxes`);
const render = document.querySelector(`[data-action="render"]`);
const destroy = document.querySelector(`[data-action="destroy"]`);

validInput.addEventListener(`blur`, focus);
worm.addEventListener(`input`, fontSize);
render.addEventListener(`click`, funcRender);
destroy.addEventListener(`click`, funcDestoy);
input.addEventListener(`input`, getName);
Increment.addEventListener(`click`, incfunction);
Decrement.addEventListener(`click`, decfunction);

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

ingredients.map((element) => {
  newLi(element);
});

function newLi(e) {
  newObj = document.createElement(`li`);
  newObj.textContent = e;
  ulForm.append(newObj);
}

const outerHtml = images.map((e) => {
  return create(e);
});

function create(element) {
  newLine = document.createElement(`li`);
  newImg = document.createElement(`img`);
  newImg.alt = `${element.alt}`;
  newImg.src = `${element.url}`;
  newLine.append(newImg);
  return newLine.outerHTML;
}

outerHtml.map((e) => {
  ulForm2.insertAdjacentHTML(`afterbegin`, e);
});

let counter = 0;
function incfunction() {
  counter += 1;
  value.textContent = counter;
}

function decfunction() {
  counter -= 1;
  value.textContent = counter;
}

function getName() {
  if (input.value !== ``) {
    span.textContent = input.value;
  } else span.textContent = `незнакомец`;
}

function focus() {
  if (validInput.value.length >= 6) {
    validInput.classList.remove(`invalid`);
    validInput.classList.add(`valid`);
  } else {
    validInput.classList.remove(`valid`);
    validInput.classList.add(`invalid`);
  }
}

let txtSize = 0;
function fontSize(e) {
  txtSize = e.explicitOriginalTarget.value;
  textEditor.style.fontSize = `${txtSize}px`;
}

function funcRender(e) {
  createDivs(Number(numberGen.value));
}

function funcDestoy() {
  divBoxes.innerHTML = ``;
}

function createDivs(amount) {
  divBoxes.innerHTML = ``;
  let i = 0;
  let firstBlockSize = 30;

  function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  while (amount !== i) {
    i += 1;
    const divEl = document.createElement(`div`);
    divEl.style.width = `${firstBlockSize}px`;
    divEl.style.height = `${firstBlockSize}px`;
    divEl.style.backgroundColor = getRandomRgb();
    divBoxes.append(divEl);
    firstBlockSize += 10;
  }
}
