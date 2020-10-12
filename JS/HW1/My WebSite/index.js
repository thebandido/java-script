const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Anissa Kate",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
    photo: `./anissa.jpg`,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Lana Rhoades",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
    photo: `./lana.jpeg`,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Adriana Chechik",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "female",
    age: 24,
    photo: `./adriana.jpg`,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "August Ames",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
    photo: `./august.jpg`,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Lela Star",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "female",
    age: 27,
    photo: `./lela.jpg`,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Cherie Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "female",
    age: 38,
    photo: `./cherie.jpg`,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Nadia Ali",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
    photo: `./nadia.jpg`,
  },
];

const userA = {
  id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
  name: "Liya Silver",
  email: "liyasilver@pornhub.com",
  eyeColor: "green",
  friends: ["Sonya Goldfinger", `Madison Ivy`],
  isActive: false,
  balance: 22811,
  skills: ["ipsum", "lorem"],
  gender: "female",
  age: 22,
  photo: `./liya.jpg`,
};

const userB = {
  id: "701b29c3-435fdf-435dfd-a5f6-Ffs53lk",
  name: "Madison Ivy",
  email: "madisonivy@pornhub.com",
  eyeColor: "blue",
  friends: ["Liya Silver", `Administrator Pornhub`],
  isActive: false,
  balance: 22811,
  skills: ["ipsum", "lorem"],
  gender: "female",
  age: 27,
  photo: `./madison.png`,
};

const menu = document.querySelector(`.menuNavBtn`);

menu.addEventListener(`click`, buttonMenuActive);

function buttonMenuActive(event) {
  myStr.classList.toggle(`hidden`);
  menu.classList.toggle(`active`);
}

const dataBase = someOne(users);
function someOne(users) {
  return users.map((item) => structure(item));
}

const profileB = structure(userB);
const profileA = structure(userA);

const myStr = document.querySelector(`.myFirstDom`);
myStr.append(profileB, ...dataBase, profileA);

function structure({
  id,
  name,
  email,
  eyeColor,
  friends,
  balance,
  gender,
  age,
  photo,
}) {
  const container = document.createElement(`div`);
  container.classList.add(`container`);
  const userPhoto = document.createElement(`img`);
  userPhoto.classList.add(`userPhoto`);
  userPhoto.src = photo;
  container.append(userPhoto);

  const bItem = document.createElement(`b`);
  bItem.textContent = `User id: `;
  container.append(bItem);
  const additionalText = document.createTextNode(`${id}`);
  container.append(additionalText);

  const ulItem = document.createElement(`ul`);
  ulItem.classList = `ulClass`;
  container.append(ulItem);

  const Button1hour = document.createElement(`button`);
  Button1hour.textContent = `Buy for 1 hour`;
  Button1hour.classList = `buyButton`;

  const Button2hour = document.createElement(`button`);
  Button2hour.textContent = `Buy for 2 hour`;
  Button2hour.classList = `buyButton`;

  const Button1day = document.createElement(`button`);
  Button1day.textContent = `Buy for 1 day`;
  Button1day.classList = `buyButton`;
  const Button1week = document.createElement(`button`);
  Button1week.textContent = `Buy for 1 week`;
  Button1week.classList = `buyButton`;

  ulItem.append(
    liItem(`Name: `, name),
    liItem(`Gender: `, gender),
    liItem(`Age: `, age),
    liItem(`Eye color: `, eyeColor),
    liItem(`Friends: `, friends),
    liItem(`Email: `, email),
    liItem(`Balance: `, balance, `USD`),
    Button1hour,
    Button2hour,
    Button1day,
    Button1week
  );

  return container;
}

const BuyButton = document.querySelector(`.buyButton`);
BuyButton.addEventListener(`click`, buyFuction);
const counterFlag = document.querySelector(`.count`);
let counterValue = 1;

function buyFuction() {
  counterFlag.classList.add(`visible`);
  counterFlag.textContent = counterValue;
  counterValue += 1;
}

function liItem(info, item, currency = ``) {
  const lineItem = document.createElement(`li`);
  const bItem = document.createElement(`b`);
  bItem.textContent = `${info} `;
  const textField = document.createTextNode(`${item} ${currency}`);
  lineItem.append(bItem, textField);

  return lineItem;
}
