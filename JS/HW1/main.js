"use strict";

// const { SSL_OP_CRYPTOPRO_TLSEXT_BUG } = require("constants");

// const { join } = require("path");

// const { isString } = require("util");

// const { isNumber } = require("util");

// const { captureRejectionSymbol } = require("events");

// const phrase = "Генератор защитного поля";
// let price;

// price = 1000;
// let result = `Выбран ${phrase} ,цена за штуку ${price} кредитов`;
// alert(result)

// price = 2000;
// result = `Выбран ${phrase} ,цена за штуку ${price} кредитов`;
// alert(result)```

//         const result = `Выбран ${phrase} ,цена за штуку ${price} кредитов`;
//         console.log(price);

//         price = 2000;
//         const result = `Выбран ${phrase} ,цена за штуку ${price} кредитов`;
//         console.log(price);

// const name = "New user";

// const price = 300;

// const isUserActive = true;

// const isChatOpened = false;

// const random = name + price;

// const result = typeof random;

// const wantToFly = confirm("Нежелаете ли полететь в Рим?")

// const question = prompt("Нежелаете ли полететь в Рим?")

// _________________________________________
// const ordered = 200;
// const total = 200;
// const x = "Заказ оформлен, с вами свяжется менеджер";
// const y = "На складе недостаточно твоаров!";
// if(ordered > total) alert(y)
// if(ordered <= total) alert(x)
// _________________________________________

//                 const prodTitle = "Radeon Rx 580 8gb Asus Dual";
//                 const searchString = "duals";
//                 const prodTitleInLC = prodTitle.toLowerCase();
//                 const searchStringInLC = searchString.toLowerCase();
//                 const good = "Нашли сами неожидали!";
//                 const bad = "Ненайдено";

//                 const result = prodTitleInLC.includes(searchStringInLC) ;
//                 if(result === true) {alert(good)}
//                 else if (result !== true) {alert(bad)}

// _________________________________________

// const answer = prompt("Введите пароль");
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message = "cancelled";
// if(answer !== null) {
// if(answer !== ADMIN_PASSWORD) message = "Доступ запрещен, неверный пароль!"
// if(answer === ADMIN_PASSWORD) message = "Добро пожаловать"
// }
// alert(message)

// _________________________________________

// const credits = 23580;
// const pricePerDroid = 300;
// const howMany = prompt("Сколько ремонтных дроидов Вы хотите приобрести?");
// let message = "Error";
// const answer = parseInt(howMany,10);
// const totalPrice = answer * pricePerDroid;
// const calculation = credits - totalPrice;
// if(answer !== null) {
// if(totalPrice > credits) message = "Недостаточно средств на счету"
// if(totalPrice <= credits && answer > 0) message = `Вы купили ${answer} дроидов, на счету осталось ${calculation} кредитов.`
// if(Number.isNaN(answer)) message = "Вы ввели не корректные данные"
// if(answer < 0) message = "отрицательное число"
// }
// alert(message)

// _________________________________________

// const question = prompt("Напишите в какую страну хотите оформить доставку?");
// const china = "Китай";
// const chinaPrice = "100";
// const chilie = "Чили";
// const chiliePrice = "250";
// const australia = "Австралия";
// const australiaPrice = "170";
// const india = "Индия";
// const indiaPrice = "80";
// const jamaica = "Ямайка";
// const jamaicaPrice = "120";
// let price, country;

// switch (question.toLowerCase()) {
//   case china.toLowerCase():
//     country = china;
//     price = chinaPrice;
//     break;
//   case chilie.toLowerCase():
//     country = chilie;
//     price = chiliePrice;
//     break;
//   case australia.toLowerCase():
//     country = australia;
//     price = australiaPrice;
//     break;
//   case india.toLowerCase():
//     country = india;
//     price = indiaPrice;
//     break;
//   case jamaica.toLowerCase():
//     country = jamaica;
//     price = jamaicaPrice;
//     break;
//   default:
//     break;
// }
// if (price) {
//   alert(`Доставка в ${country} будет стоить ${price} кредитов`);
// } else {
//   alert(`Доставка в Вашу страну невозможна`);
// }
// _________________________________________

// продажа кофе
// const Cancelled = 0;

// const Small_cup = 1;

// const Medium_cup = 2;

// const Large_cup = 3;

// const Extra_Large_cup = 4;

// const input = Number(
//   prompt(
//     "Выберите размер стакана: 1 - Маленький стакан, 2 - Средний стакан, 3 - Большой стакан, 4 - Самый большой стакан",
//     3
//   )
// );

// if (input === Small_cup) {
//   alert("Готовим Кофе маленького размера");
// } else if (input === Medium_cup) {
//   alert("Готовим Кофе среднего размера");
// } else if (input === Large_cup) {
//   alert("Готовим Кофе большого размера");
// } else if (input === Extra_Large_cup) {
//   alert("Готовим Кофе самого большого размера");
// } else {
//   alert("Произшла ошибка, попробуйте снова");
// }

// const isMoreThen10 = Number(prompt("Введите число больше 10"));

// let result = isMoreThen10 > 10 ? "Ура вы угадали" : "Не угадали";

// alert(result);

// const newQ = prompt("вопрос");

// const isNumber = Number(newQ);

// const value = newQ !== null && !Number.isNaN(isNumber);

// console.log(value);

// _________________________________________

// let userAnswer = prompt("Введите число");
// let total = 4;
// let message;

// while (userAnswer !== null) {
//   if (!Number(isNaN(userAnswer))) {
//     total += parseInt(userAnswer);
//   } else {
//     message = `Вы ввели не число`;
//   }

//   userAnswer = prompt(`Введите число снова`);
// }

// alert((message = `Ваша сумма по всем введенным числам ${total}`));

// _________________________________________

// const newMedia = ["car1", "car2", "car3", "car4", "car5", "car6", "car7"];

// console.log(newMedia.indexOf("car2"));

// console.log(newMedia.length);

// newMedia[4] = `bus777`;
// console.log(newMedia);

// newMedia[9] = `bus888`;
// console.log(newMedia);

// // Итерация по массиву
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const users = `самоедлинноеслововмире`;

// for (const usrString of users) {
//   console.log(usrString);
// }

// const activeUsers = [
//   `user1`,
//   `user2`,
//   `user3`,
//   `user4`,
//   `user5`,
//   `user6`,
//   `user7`,
//   `user8`,
// ];
// let userToFind = `user9`;
// let message;

// for (const users of activeUsers) {
//   if (userToFind === users) {
//     message = `пользователь найден`;
//     break;
//   }
//   message = `пользователь не найден`;
// }
// alert(message);

// const numbers = [
//   1,
//   3,
//   14,
//   18,
//   4,
//   7,
//   29,
//   6,
//   34,
//   4,
//   6,
//   8,
//   12,
//   22,
//   25,
//   27,
//   28,
//   77,
//   900,
// ];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const activeUsers = `welcome to java script world`;
// console.log(activeUsers);
// const newActiveUsers = activeUsers.split(" ");

// console.log(newActiveUsers);

// const oldActiveUsers = newActiveUsers.join(` `);
// console.log(oldActiveUsers);

// const crybex = [1, 2, 3, 4, 5, `one`, `two`, `three`];
// const dollar = `I want to know english better`;

// console.log(crybex.includes(`two`));

// let counter = 0;

// while (counter < 10) {
//   console.log(counter);
//   counter += 1;
// }

// let guests = 1;
// const hotelRooms = 37;

// while (guests < hotelRooms) {
//   console.log(`Guests in hotel: `, guests);
//   guests += 1;
// }

// let Numbers = 19;

// do {
//   console.log(Numbers);
//   Numbers += 1;
// } while (Numbers !== 10000);

// const Panda = [33, 7, -1, -2, 32, 8, 21, 19, 5, 11, 23, 100, 11, 12, 13, 14, 0];
// let summ = 0;

// for (let i = 0; i < Panda.length; i += 1) {
//   if (Panda[i] > 0 && Panda[i] < 10) {
//     console.log(Panda[i]);
//   }
// }

// while (Panda[i] !== 5) {
//   console.log(Panda[i]);
//   i += 1;
// }

// for (let i = 0; i < Panda.length; i += 1) {
//   summ += Panda[i];
//   console.log(summ);
// }

// for (let i = 0; i < Panda.length; i++) {
//   summ += Panda[i];
//   console.log(summ);
// }
// console.log(summ / Panda.length);

// const Murr = [];

// for (let i = 0; i < 6; i++) {
//   Murr.push(`X`);
// }
// console.log(Murr);

// const newNumb = [];

// for (let i = 1; i < 11; i += 1) {
//   newNumb.push(i);
// }
// console.log(newNumb);

// const www = [];

// for (let i = 0; i < 10; i++) {
//   let twin = Math.random();
//   www.push(twin);
// }
// console.log(www);

// const message = `Beyoncé Giselle (born September 4, 1981) is an American singer, songwriter, record producer and actress. Born and raised in Houston, Texas, she performed in various singing e`;
// const massive = message.split(` `);
// let newM = massive[0];

// for (let i = 1; i < massive.length; i++) {
//   if (newM.length < massive[i].length) {
//     newM = massive[i];
//   }
// }

// console.log(newM);

// const newFunct = function (x, y, z) {
//   const lil = x * y * z;
//   return lil;
// };

// console.log(`result: `, newFunct(2, 3, 4));

// const word = `Beyoncé Giseclle born Septembeererr 4 1981 is an American singer`;
// const findLongestWord = function (x) {
//   const massive = word.split(` `);
//   let starter = massive[0];

//   for (const mass of massive) {
//     if (starter.length < mass.length) {
//       starter = mass;
//     }
//   }
//   return starter;
// };

// console.log(findLongestWord(word));
// const names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 77];
// const toFind = 9;

// const findElement = function (arr, val) {
//   for (const item of arr) {
//     if (item === val) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(findElement(names, toFind));

// let userAnswer = prompt(`Ведите число от 1 до 100`);
// const userAnswerInNumber = parseInt(userAnswer);
// let gameIs = true;

// function getRandom(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }

// const min = 1;
// const max = 100;
// const randomNum = getRandom(min, max);
// console.log(randomNum);

// while(gameIs){
//   if(){

//   }
// }
//------------------------ Домашнее задание Модуль 2

//------------------------ Задание 1

// const logItems = function (array) {
//   let i = 0;
//   for (const result of array) {
//     i += 1;
//     console.log(i, `-`, result);
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//------------------------ Задание 2

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const messageToMassive = message.split(` `);
//   return messageToMassive.length * pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// );

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// );

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// );
// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// );

//------------------------ Задание 3

// const findLongestWord = function (string) {
//   let longetWord = ``;
//   for (const word of string.split(` `)) {
//     if (longetWord.length < word.length) {
//       longetWord = word;
//     }
//   }
//   return longetWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

//------------------------ Задание 4

// const formatString = function (string) {
//   const customString = string.split(``);
//   console.log(customString);

//   if (customString.length > 40) {
//     customString.splice(40);
//     customString.push(`...`);
//   }
//   return customString;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );

//------------------------ Задание 5

// const checkForSpam = function (randomMessage) {
//   const randomMessageToLowerCase = randomMessage.toLowerCase();
//   let answer = "";
//   if (
//     randomMessageToLowerCase.includes(`spam`) ||
//     randomMessageToLowerCase.includes(`sale`)
//   ) {
//     answer = `true`;
//   } else answer = `false`;
//   return answer;
// };

// console.log(checkForSpam(`Latest technology news`));
// console.log(checkForSpam(`JavaScript weekly newsletter`));
// console.log(checkForSpam(`Get best sale offers now!`));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

//------------------------ Задание 6

// let input;
// let numbers = [];
// let total = 0;
// let stopWord = true;

// let isGame = true;

// while (isGame) {
//   while (stopWord) {
//     input = prompt(`Введите число`);

//     if (input === null) {
//       alert(`Досвиданья`);
//       stopWord = false;
//     } else {
//       if (isNaN(parseInt(input))) {
//         alert(`Вы ввели не число`);
//       } else numbers.push(parseInt(input));
//     }
//   }

//   for (const res of numbers) {
//     total += res;
//   }
//   console.log(numbers);
//   console.log(total);
//   alert(total);
//   isGame = confirm("Want more?");
//   stopWord = isGame;
//   numbers = [];
//   total = 0;
// }

//------------------------ Задание 7

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// let isValid;
// let isUnique;

// const isLoginValid = function (newLogin) {
//   if (newLogin.length >= 4 && newLogin.length <= 16) {
//     isValid = true;
//   } else isValid = false;

//   return isValid;
// };

// const isLoginUnique = function (allLogins, login) {
//   let itemsToLc = [];

//   for (const item of allLogins) {
//     itemsToLc.push(item.toLowerCase());

//     if (itemsToLc.includes(login.toLowerCase())) {
//       isUnique = false;
//     } else isUnique = true;
//   }
//   return isUnique;
// };

// const addLogin = function (allLogins, login) {
//   console.log(isLoginValid(login));
//   console.log(isLoginUnique(logins, login));
//   let stopWord = true;

//   while (stopWord) {
//     if (isLoginValid(login)) {
//       if (isLoginUnique(allLogins, login)) {
//         allLogins.push(login);
//         stopWord = false;
//         let successfulMessage;
//         alert((successfulMessage = `Ваш логин успешно добавлен`));
//         console.log(allLogins);
//       } else {
//         stopWord = false;
//         let errorMessage;
//         alert((errorMessage = `Такой логин существует`));
//       }
//     } else {
//       stopWord = false;
//       let gameOver;
//       alert((gameOver = `Логин не валидный`));
//     }
//   }
// };

// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// ------------  Модуль 3 домашнее задание 1

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// const homeWork = function (strng) {
//   strng.mood = `happy`;
//   strng.hobby = `skydiving`;
//   strng.premium = false;
//   const answer = [];
//   for (const iterator of Object.keys(strng)) {
//     answer.push(`${iterator}:${strng[iterator]}`);
//   }
//   return answer;
// };

// console.log(homeWork(user));

// ------------  Модуль 3 домашнее задание 2

// const countProps = function (obj) {
//   let counter = 0;
//   for (const iterator of Object.keys(obj)) {
//     counter += 1;
//   }
//   return counter;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// ------------  Модуль 3 домашнее задание 3

// const findBestEmployee = function (employees) {
//   let answer;
//   let val = 0;

//   for (const iterator of Object.keys(employees)) {
//     if (employees[iterator] > val) {
//       val = employees[iterator];
//       answer = iterator;
//     }
//   }
//   return answer;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// ------------  Модуль 3 домашнее задание 4
// const countTotalSalary = function (employees) {
//   let answer = 0;
//   for (const iterator of Object.values(employees)) {
//     answer += iterator;
//   }

//   return answer;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// ------------  Модуль 3 домашнее задание 5

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];
// const getAllPropValues = function (arr, prop) {
//   let answer = [];
//   for (const iterator of arr) {
//     if (iterator[prop] === undefined) {
//     } else answer.push(iterator[prop]);
//   }

//   return answer;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, "category")); // []

// ------------  Модуль 3 домашнее задание 6

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let summ = 0;
//   for (const iterator of allProdcuts) {
//     if (iterator.name === productName) {
//       summ = iterator.price * iterator.quantity;
//     }
//   }
//   return summ;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

// ------------  Модуль 3 домашнее задание 7

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   balance: 0, // Текущий баланс счета
//   transactions: [], // История транзакций
//   id: 9541,

//   createTransaction(amount, type) {
//     const newTransaction = { id: this.id, type, amount };
//     this.id += 17843;

//     return newTransaction;
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.transactions.push(this.createTransaction(amount, `deposit`));
//     this.balance += amount;
//     return console.log(`Операция DEPOSIT успешно выполнена`);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     this.createTransaction(amount, `withdraw`);
//     if (amount > this.balance) {
//       console.log(`Операция WITHDRAW прервана У вас не хватает средств`);
//       return;
//     } else this.balance -= amount;
//     this.transactions.push(this.createTransaction(amount, `withdraw`));
//     return console.log(`Операция WITHDRAW успешно выполнена`);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transact of this.transactions) {
//       if (transact.id === id) {
//         console.log(`Детали транзакции № ${id}: `, transact);
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let summOfType = 0;
//     for (const transactType of this.transactions) {
//       if (transactType.type === type) {
//         summOfType += transactType.amount;
//         break;
//       }
//     }
//     return console.log(
//       `Итого по операциям ${type}: ${summOfType} остаток на счету ${this.balance}`
//     );
//   },
// };

// console.log(account.deposit(12));
// console.log(account.deposit(29));
// console.log(account.withdraw(2));
// console.log(account.withdraw(110));
// console.log(account.withdraw(6));
// console.log(account.deposit(32));
// console.log(account.withdraw(10));
// console.log(account.withdraw(1));
// console.log(account.withdraw(11));

// console.log(account.balance);
// console.log(account.transactions);

// console.log(account.getTransactionDetails(116599));
// console.log(account.getTransactionTotal("deposit"));
// console.log(account.getTransactionTotal("withdraw"));
// const num = [44, 12, 4, 0, 1, 2, 6, 7, 8, 9];

// const myFirstCallBackFunction = function (arr, callback) {
//   const res = [];
//   for (const el of arr) {
//     if (callback(el)) {
//       res.push(el);
//     }
//   }
//   return res;
// };

// console.log(
//   myFirstCallBackFunction(num, function (el) {
//     return el >= 12;
//   })
// );

// ------------  Модуль 4 домашнее задание 1

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// ------------  Модуль 4 домашнее задание 2
// const inventory = {
//   items: ["Knife", "Gas mask"],

//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);
//     this.items.push(itemName);
//   },

//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add.bind(inventory)); //<==== + .bind.(inventory)
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove.bind(inventory)); //<==== + .bind.(inventory)
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// ------------  Модуль 5 домашнее задание 1

// const Account = function (param) {
//   this.login = param.login;
//   this.email = param.email;
// };

// Account.prototype.getInfo = function () {
//   console.log(`Login ${this.login}, Email: ${this.email}`);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// ------------  Модуль 5 домашнее задание 2

// class User {
//   constructor(param) {
//     this.name = param.name;
//     this.age = param.age;
//     this.followers = param.followers;
//   }
//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   }
// }

// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// ------------  Модуль 5 домашнее задание 3

// class Storage {
//   constructor(product) {
//     this.items = product;
//   }

//   getItems() {
//     return this.items;
//   }
//   addItem(newProduct) {
//     this.items.push(newProduct);
//   }
//   removeItem(newProduct) {
//     for (let i = 0; i < this.items.length; i++) {
//       if (newProduct === this.items[i]) {
//         this.items.splice(i, 1);
//       }
//     }
//   }
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// ------------  Модуль 5 домашнее задание 4

// class StringBuilder {
//   constructor(param) {
//     this._value = param;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value = this._value + str;
//   }

//   prepend(str) {
//     this._value = str + this._value;
//   }

//   pad(str) {
//     this._value = str + this._value + str;
//   }
// }

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// ------------  Модуль 5 домашнее задание 5

// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   static getSpecs(car) {
//     this.maxSpeed = car.maxSpeed;
//     this.speed = car.speed;
//     this.isOn = car.isOn;
//     this.distance = car.distance;
//     this.price = car._price;

//     console.log(
//       `Max speed: ${this.maxSpeed}, speed: ${this.speed}, isOn ${this.isOn}, distance ${this.distance}, price: ${this.price}`
//     );
//   }

//   constructor({ maxSpeed, price, distance = 0, isOn = false, speed = 0 }) {
//     this.speed = speed;
//     this._price = price + ` usd`;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */
//   get price() {
//     return this._price;
//   }

//   set price(value) {
//     this._price = value + ` usd`;
//   }

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     if (value + this.speed < this.maxSpeed) {
//       this.speed += value;
//     }
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     if (this.speed - value > 0) {
//       this.speed -= value;
//     }
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

/* eslint-disable max-classes-per-file */

// ------------  Модуль 5 домашнее задание от Паши и Влада

// const DB = [];

// class Auth {
//   constructor() {
//     this.isLoged = false;
//     this.isRegistered = false;
//     this.name = '';
//     this.password = '';
//     this.id = new Date().getTime();
//   }

//   register() {
//     if (this.isRegistered) return 'Already registered';
//     this.isRegistered = true;
//     this.name = prompt('your name?');
//     this.password = prompt('your password?');
//     DB.push(this);
//     return 'success';
//   }

//   login() {
//     if (this.isLoged) return 'Already logged in';
//     const name = prompt('your name?');
//     const password = prompt('your password?');

//     if (this.name === name && this.password === password) {
//       this.isLoged = true;
//       return 'Logged in';
//     }

//     return 'wrong data';
//   }

//   logout() {
//     if (!this.isLoged) return 'Already logged out';
//     this.isLoged = false;
//     return 'success';
//   }
// }

// class Bank extends Auth {
//   constructor() {
//     super();
//     this.balance = 0;
//     this.transaction = [];
//   }

//   deposit(value) {
//     this.balance += value;

//   }
// }

// class User extends Bank {
//   sayHi() {
//     if (this.isRegistered) {
//       return `Hello my name is ${this.name}! `;
//     }
//     return 'Sorry, im not registered yet';
//   }
// }

// const user = new User();

// ------------  Модуль 5 домашнее задание от Паши и Влада
// const cocktailMenu = [];

// class Cocktail {
//   constructor(cocktail) {
//     this.name = cocktail.name;
//     this.alco = cocktail.alco;
//     this.ingredients = cocktail.ingredients;
//     this.currency = `UAH`;
//     this.price = cocktail.price;
//     this.isOrdered = false;
//     this.addToMenu();
//   }

//   filter(type) {
//     const filtred = [];
//     for (const cocktail of cocktailMenu) {
//       if (cocktail.type === type) {
//         filtred.push(cocktail);
//       }
//     }
//     return filtred;
//   }

//   orderCocktail() {
//     if (!this.isOrdered) {
//       this.isOrdered = true;
//       return `${this.name} is making`;
//     }
//     return `${this.name} already making`;
//   }

//   addToMenu() {
//     if (cocktailMenu.includes(this)) return `${this.name} Already exist`;
//     cocktailMenu.push(this);
//     return `Success`;
//   }
//   get fullPrice() {
//     return `${this.price} ${this.currency}`;
//   }
// }

// const margarita = new Cocktail({
//   name: `Margarita`,
//   alco: `40%`,
//   price: 100,
//   ingredients: `tequila,ice,lime juice, triple sec`,
// });

// const vodkaRedbull = new Cocktail({
//   name: `vodkaRedbull`,
//   alco: `40%`,
//   price: 115,
//   ingredients: `redBull, vodka`,
// });

// const bloodyMarry = new Cocktail({
//   name: `bloodyMarry`,
//   alco: `40%`,
//   price: 80,
//   ingredients: `tomato juice, vodka`,
// });

// class Shot extends Cocktail {
//   constructor(shot) {
//     super(shot);
//     this.type = `shot`;
//   }
// }

// const Vodka = new Shot({
//   name: `Vodka`,
//   alco: `40%`,
//   ingredients: `Vodka`,
//   price: 100,
// });

// const Tequila = new Shot({
//   name: `Tequila`,
//   alco: `40%`,
//   ingredients: `Tequila`,
//   price: 120,
// });

// const Car = function (name, years, color) {
//   this.name = name;
//   this.years = years;
//   this.color = color;
// };

// Car.prototype.changeColor = function (newColor) {
//   this.color = newColor;
// };

// const Volga = new Car(`Volga`, 1987, `green`);
// console.log(Volga);

// Volga.changeColor(`red`);
// console.log(Volga);

// const Lada = new Car(`Lada`, 2001, `black`);
// console.log(Lada);

// Lada.changeColor(`olive`);
// console.log(Lada);

// for (const iterator of object) {

// }

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_- ДЗ от Павла -_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// const randomNumbers = [1, 2, 3, 4, 5, 11, 22, 33, 100, 232, 1292, 3232, 25];

// ----- Получить все элементы которые больше 20
// const res = randomNumbers.filter((num) => num > 20);
// console.log(res);

// -----  Получить сумму всех елементов
// const res = randomNumbers.reduce((acc, num) => num + acc, 0);
// console.log(res);

// -----  Получить сумму всех чётных елементов массива
// const res = randomNumbers.filter((num) => num % 2 == 0);
// const summEven = res.reduce((acc, num) => num + acc);
// console.log(summEven);

// -----  Получить все елементы массива, позиция которых в массиве четная
// const res = randomNumbers.filter((num, ind) => ind % 2 == 0);
// console.log(res);

// -----  Проверить все ли елементы массива меньше 1000
// const res = randomNumbers.every((num) => num < 1000);
// console.log(res);

// -----  Проверить есть ли в массиве минусовое число
// const res = randomNumbers.every((num) => num < 0);
// console.log(res);

// -----  Удалить из массива каждый третий елемент
// const res = randomNumbers.filter((num, ind) => (ind + 1) % 3 !== 0);
// console.log(res);

// ----- // Получить новый массив в котором все елементы которые кратные 2 заменены на "even"
// const res = randomNumbers.map(function (num) {
//   const d = [];
//   if (num % 2 !== 1) {
//     d.push(`even`);
//   } else d.push(num);
//   return d;
// });
// console.log(res);

// -----  Найти первый елемент который кратный 3
// const res = randomNumbers.find((num) => num % 3 == 0);
// console.log(res);

// -----  Получить все елементы которые начинаются не c 1
// const res = randomNumbers.filter((num) => !num.toString().includes(1));
// console.log(res);

// -----  Найти последний елемент который содержит в себе 1
// const res = randomNumbers.filter((num) => num.toString().includes(1));
// console.log(res[res.length - 1]);

// -----  После каждого елемента который начинается с 2, вставить в массив 5
// const t = [];
// const res = randomNumbers.filter(function (num) {
//   const d = num.toString().split(``);
//   if (d[0] == 2) {
//     t.push(num);
//     t.push(5);
//   } else t.push(num);
// });
// console.log(t);

// const Users = [
//   {
//     Id: 1,
//     user: "pavel",
//     age: 18,
//     email: `some@gmail.com`,
//     isPremium: false,
//   },
//   {
//     Id: 2,
//     user: "masha",
//     age: 20,
//     email: `some@mail.com`,
//     isPremium: false,
//   },
//   {
//     Id: 3,
//     user: "magdalena",
//     age: 65,
//     email: `terminator@gmail.com`,
//     isPremium: true,
//   },
//   {
//     Id: 4,
//     user: "victor",
//     age: 17,
//     email: `angry@beaver.com`,
//     isPremium: true,
//   },
//   {
//     Id: 5,
//     user: "damirkin",
//     age: 25,
//     email: `mail@google.com`,
//     isPremium: true,
//   },
//   {
//     Id: 6,
//     user: "johnatan",
//     age: 31,
//     email: `my@micro.net`,
//     isPremium: true,
//   },
// ];

// Получить всех кто премиум
// const results = Users.filter((num) => num.isPremium);
// console.log(results);

// Получить средний возраст всех юзеров
// const results = Users.reduce((acc, val) => acc + val.age, 0);
// console.log(results / Users.length);

// Вывести по очереди в консоль е-мейл каждого юзера
// const results = Users.filter((num) => console.log(num.email));

// Изменить имя пользователя на написание с большой буквы (pasha=>Pasha)
// const results = Users.map((num) => {
//   num.user[0] = num.user[0].toUpperCase();
//   return num.user[0];
// });
// console.log(results);

// console.log(results);

//Отсортировать массив по возрасту юзеров
// Получить список доменов без дубликатов, на которых юзеры имеют емайлы

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// ------------  Модуль 6 домашнее задание 1

// const getUserNames = (users) => {
//   const d = [];

//   const res = users.filter((val) => d.push(val.name));
//   return d;
// };

// console.log(getUserNames(users));

// ------------  Модуль 6 домашнее задание 2
// const getUsersWithEyeColor = (users, color) => {
//   const res = users.filter((val) => {
//     if (val.eyeColor === color) {
//       return val;
//     }
//   });
//   return res;
// };

// console.log(getUsersWithEyeColor(users, "blue"));

// ------------  Модуль 6 домашнее задание 3

// const getUsersWithGender = (users, gender) => {
//   const d = [];
//   const res = users.filter((val) => {
//     if (val.gender === gender) {
//       d.push(val.name);
//     }
//   });
//   return d;
// };

// console.log(getUsersWithGender(users, "male"));

// ------------  Модуль 6 домашнее задание 4

// const getInactiveUsers = (users) => {
//   const res = users.filter((val) => !val.isActive);
//   return res;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ------------  Модуль 6 домашнее задание 5

// const getUserWithEmail = (users, email) => {
//   let d = {};
//   const res = users.filter((val) => {
//     if (val.email == email) {
//       d = val;
//     }
//   });
//   return d;
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// ------------  Модуль 6 домашнее задание 6

// const getUsersWithAge = (users, min, max) => {
//   const res = users.filter((val) => {
//     if (val.age > min && val.age < max) {
//       return val;
//     }
//   });
//   return res;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ------------  Модуль 6 домашнее задание 7

// const calculateTotalBalance = (users) => {
//   const res = users.reduce((acc, val) => val.balance + acc, 0);
//   return res;
// };

// console.log(calculateTotalBalance(users)); // 20916

// ------------  Модуль 6 домашнее задание 8
// const getUsersWithFriend = (users, friendName) => {
//   const res = users.filter((val) => {
//     if (val.friends.includes(friendName)) {
//       return val.name;
//     }
//   });
//   return res;
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// ------------  Модуль 6 домашнее задание 9

// const getNamesSortedByFriendsCount = (users) => {
//   const d = [];
//   const res = [...users].sort((a, b) => {
//     return a.friends.length - b.friends.length;
//   });
//   res.filter((val) => {
//     d.push(val.name);
//   });
//   return d;
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ------------  Модуль 6 домашнее задание 10

const getSortedUniqueSkills = (users) => {
  const skls = users.reduce((acc, val) => {
    acc.push(...val.skills);
    return acc;
  }, []);
  const uniqe = [...new Set(skls)];

  const sorted = uniqe.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });

  return sorted;
};

console.log(getSortedUniqueSkills(users));

// const result = users.reduce((acc, val) => {
//   if (val.name === `Sheree Anthony`)
//     acc.push(val.name);
//   }
//   return acc;
// }, []);

// console.log(result);
