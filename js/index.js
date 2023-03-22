// Создайте переменную age и присвойте ей ваш возраст.
// Выведите на экран 'Мне %Возраст% лет!'.

// const age = 44;
// console.log('Мені', (`${age}`), 'років!');

// Спросите имя пользователя с помощью методы prompt.
// Выведите с помощью alert сообщение 'Ваше имя %имя%'.

// const userName = prompt('Введіть Ваше імя');
// console.log('Ваше імя:', (`${userName}`));

// Спросите у пользователя число.
// Выведите с помощью alert квадрат этого числа.

// const number = prompt('Введіть число');
// const numberSqr = Math.pow(`${number}`, 2);
// console.log('Введене число в квадраті:', (`${numberSqr}`));

// Создайте переменную str и присвойте ей значение 'abcde'.
// Обращаясь к отдельным символам этой строки выведите на экран
// символ 'a', символ 'c', символ 'e'.
// const str = 'abcde';
// console.log(str[0], str[2], str[4]);

// Создайте переменную num и присвойте ей значение '12345'.
// Найдите произведение (умножение) цифр этого числа.
// const num = '12345';
// const num1 = Number(num);
// const num2 = num[0] * num[1] * num[2] * num[3] * num[4];

// console.log(num2);

//  Создайте массив arr = ['a', 'b', 'c'].
//  Выведите его на экран с помощью функции alert.

// const arr = ['a', 'b', 'c'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

//let a = '5' * 1 + '2' * 1;
//alert(a);
//let a = '5' * '1' + '2' * '1';
//alert(a);
//Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

//Оголошена функція checkAge(age).
//У виразі перевірки віку використаний оператор >=
//Виклик checkAge(20) повертає "You are an adult"
//Виклик checkAge(8) повертає "You are a minor"
//Виклик checkAge(14) повертає "You are a minor"
//Виклик checkAge(38) повертає "You are an adult"
//В тілі функції є тільки одна інструкція if
//В тілі функції відсутні інструкції else або else if
//function checkAge(age){
//  if(age >= 18){
//    return "You are an adult";
//  }
//  return "You are a minor";
//}

//function checkPassword(password) {
//  const ADMIN_PASSWORD = "jqueryismyjam";
//  // Change code below this line
//  if (password === ADMIN_PASSWORD) {
//     return "Welcome!" ;
//     }
//   return "Access denied, wrong password!";

//    // Change code above this line
//}
// let a = 2 * (8 / 4);
// alert(a);
// let a = 13;
// let b = 5;
// const c = 13 % 5;
// console.log(c);

// const a = 2;
// console.log(a ** 10);

// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//      return "Your order is empty!";
//   }
//   if (ordered > available) {
//      return  "Your order is too large, not enough goods in stock!";
//   } //else {
//    // return message = "The order is accepted, our manager will contact you";
//  // }
// return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElenent = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(firstElenent);
// console.log(secondElement);
// console.log(lastElement);

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// // Write your code under this line

// function getExtremeElements(array) {
//     // Change code below this line
//     let firstArrayElement = array[0];
//     let lastArrayElement = array[array.length - 1];
//     let newArray = [firstArrayElement, lastArrayElement];
//
//     return newArray;

//     // Change code above this line
//   }

// function splitMessage(message, delimeter) {
//     let words = message.split( delimeter);
//     // Change code below this line
//     return words;
//     // Change code above this line

//   }

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//  const arrayMessage = message.split(' ');
//  const totalPrice = arrayMessage.length * pricePerWord;;
//  return totalPrice;

//   // Change code above this line
// }

// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Change code below this line
//     string = array.join(delimeter);

//     // Change code above this line
//     return string;
//   }

// function slugify(title) {
//     // Change code below this line
//     const titleLowerCase = title.toLowerCase();
//     const slug = titleLowerCase.split(" ");
//    return slug.join('-');

//     // Change code above this line
//   }

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// function makeArray(firstArray, secondArray, maxLength) {
//     const allArray = firstArray.concat(secondArray);
//     if (allArray.length > maxLength) {
//       return allArray.slice(0, maxLength);
//  }    else {
//       return allArray;
//   }

//    // Change code above this line
//  }

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1 ) {

//     console.log(i);
//     //break;

// }

// function calculateTotal(number) {
//     // Change code below this line
//      let total = 0;
//     for (let i=0, sum=0; i <= number; i +=1 ) {
//       total += i;
//     }
//      return total;
//       }

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (i = 0; i < order.length; i ++) {
//         //const order = array[i];
//         total += order[i];
//          }
//          return total;
//     }
//   // return total;
//     // Change code above this line

// function findLongestWord(string) {
//   // Change code below this line
//   let arrString = string.split(' ');
//   let wordLength = 0;
//   let longestWord = 0;
//   for (let i = 0; i < arrString.length; i += 1) {
//     wordLength = arrString[1].length;

//     if (arrString[i].length > wordLength) {
//       longestWord = arrString[i];
//       return longestWord;
//     }
//   }

//   // Change code above this line
// }

// console.log(
//   findLongestWord(
//     'Напишите программу, которая выводит через все числа от 1 до 100, с двумя исключениями. '
//   )
// );

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//    for (let i = min; i <= max; i++) {
//         numbers.push(i);
//    }
//     // Change code above this line
//     return numbers;
//   }

//   function filterArray(numbers, value) {
//     const number = [];

//     for(let i = 0; numbers.length > i; i++){

//         if (numbers[i]>value){
//             number.push(numbers[i])
//         }
//         }
//       return number;
//     }

// function filterArray(numbers, value) {
// //    Change code below this line
//   const number = [];
// for (let i = numbers; numbers > value; i++) {

//   if (numbers % i == 0) {
//        return false;
//       }
//   }
//     return numbers > value;

// //   Change code above this line
// }

// function filterArray(numbers, value) {
//   const number = [];

//   for(let i = numbers[0]; i <= numbers.length; i++){

//       if (numbers[i] > value) {
//           number.push(numbers[i])
//       }
//       }
//     return number;
//   }

//   console.log(filterArray([12, 24, 8, 41, 76], 20));

/*Напиши функцію filterArray(numbers, value), 
яка приймає масив чисел (параметр numbers) і повертає новий масив, 
в якому будуть тільки ті елементи масиву numbers, 
які більші за значення параметра value (число).*/

// function filterArray(numbers, value) {
//   const filteredArray = numbers.filter((number) => number > value);
//   return filteredArray;
// }

// function filterArray(numbers, value) {
//   const filteredArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       filteredArray.push(numbers[i]);
//     }
//   }
//   return filteredArray;
// }

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//    return  fruits.includes(fruit);
// }

// Change code below this line
// let newArray = [];
// for (let i = 0; i < array1.length; i ++) {
//         // Change this line
//         if (array2.includes(array1[i])) {
//                 newArray.push(array1[i]);
//         }
// }
// return newArray;
// }

//let array3 = [];
//   for (let newArray of array1) {
//     if (array2.includis(newArray)) {
//         array3.push(newArray);
//        }
//   }
// return array3;

// function calculateTotalPrice(order) {
//   // Change code below this line
//  let total = 0;
//  for (const score of order) {
//        total += score;
//  }

//  return total;
// }

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (const number of numbers) {
//        if (number > value) {
//       filteredNumbers.push(number);
//   }

//  // for (let i = 0; i < numbers.length; i += 1) {
//    // const number = numbers[i];

//    // }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i <= end; i += 1) {
//     if (i % divisor === 0) {
//      return i;
//      // break;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// function includes(array, value) {
//   // Change code below this line
//   let message = false;
//     for (let i of array) {
//       if (i === value) {
//         message = true;
//         break;
//       }
//     }

//   return message;
// }

// Об'єкти

//
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//  const propArrey = [];
//   for (product of products) {
//     if (product[propName]) {
//       propArrey.push(product[propName]);
//     }
//   }
//  return propArrey;

//   // Change code above this line
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let result = 0;
//  for (const product of products) {
//     if (product.name === productName)  {
//     return  result = product.price * product.quantity;
//        }
//   }
//   return 0;

//   // Change code above this line
// }

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: {
//   low: lowToday,
//        high: highToday,
//        icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// },
//        tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//       } = forecast;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const { today: {low: todayLow,
//                  high: todayHigh,},
//          tomorrow: { low: tomorrowLow,
//                     high: tomorrowHigh,}
//          } = forecast;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(... scores);
// console.log(bestScore);
// const worstScore = Math.min(... scores);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(... allScores);
// const worstScore = Math.min(... allScores);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore);
// console.log(worstScore);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return {category, priority, completed, ...data}
//   // Change code above this line
// }

// Change code below this line
// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
//   // Change code above this line
// }

// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > args[0]) {
//       total += arg;
//     }

//   }

//   return total;
//   // Change code above this line
// }

// Change code below this line
// function findMatches(firstArray, ...secondArray) {
//   const matches = []; // Don't change this line
//   for (const item of firstArray) {
//   if (secondArray.includes(item)) {
//     matches.push(item);
//   }
//   }

//   // Change code above this line
//   return matches;
// }

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIdx = this.books.indexOf(oldName);
// this.books.splice(bookIdx, 1, newName);
//     return this.books;
//   },
// };

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIdx = this.books.indexOf(oldName);
// this.books.splice(bookIdx, 1, newName);
//     return this.books;
//   },
// };

// const atTheOldToad = {
//   // Change code below this line
// potions: [],
//   getPotions(potions) {
//     return potions;
//   },

//   // Change code above this line
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions(potions) {
//     return this.potions;
//   },
//   // Change code above this line
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//  this.potions.push(potionName);
//     return this.potions;

//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

//  const bookIndex = this.potions.indexOf(potionName);
//       this.potions.splice(bookIndex, 1);
//     return;

//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//  getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name)
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i +=1) {
//       const potion = this.potions[i];
//       if (potion.name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//       return `Potion ${potionName} is not in inventory!`;
//     },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//         return `Potion ${oldName} is not in inventory!`;
//      },
//   // Change code above this line
// };

// Перебираючі об'єкти

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   return users.filter((user) => user.gender === gender).reduce((total, user) =>
// total + user.balance, 0);
//   };
//   // Change code above this line

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//     const userEyeColor = users.filter(
//       ({eyeColor}) => eyeColor === color
//     );
//    return userEyeColor;
//    };
//    // Change code above this line

// Доповни функцію getUsersWithAge(users, minAge, maxAge)
// таким чином, щоб вона повертала масив користувачів,
// вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.

// Change code below this line
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39
//     }
//   ];
// const getUsersWithAge = (users, minAge, maxAge) => {
//     const usersAge = users.filter(
//         ({age}) => age >= minAge && age <= maxAge
//     );
//     return usersAge;
//     console.log(usersAge);

//    };

// Change code above this line

// Доповни функцію getFriends(users) таким чином,
// щоб вона повертала масив друзів всіх користувачів
// (властивість friends). У декількох користувачів можуть
// бути однакові друзі, зроби так, щоб масив, що повертається,
// не містив повторень.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// // Change code below this line
// const getFriends = users => {
//   // const allUsers = users.flatMap(user => user.friends);
//   // return allUsers.filter(
//   //    (friend, index, array) => array.indexOf(friend) === index
//   // );

//   return users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
// };
// // Change code above this line


const users = [
   {
     name: "Moore Hensley",
     email: "moorehensley@indexia.com",
     eyeColor: "blue",
     friends: ["Sharron Pace"],
     isActive: false,
     balance: 2811,
     gender: "male",
     age: 37
   },
   {
     name: "Sharlene Bush",
     email: "sharlenebush@tubesys.com",
     eyeColor: "blue",
     friends: ["Briana Decker", "Sharron Pace"],
     isActive: true,
     balance: 3821,
     gender: "female",
     age: 34
   },
   {
     name: "Ross Vazquez",
     email: "rossvazquez@xinware.com",
     eyeColor: "green",
     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
     isActive: false,
     balance: 3793,
     gender: "male",
     age: 24
   },
   {
     name: "Elma Head",
     email: "elmahead@omatom.com",
     eyeColor: "green",
     friends: ["Goldie Gentry", "Aisha Tran"],
     isActive: true,
     balance: 2278,
     gender: "female",
     age: 21
   },
   {
     name: "Carey Barr",
     email: "careybarr@nurali.com",
     eyeColor: "blue",
     friends: ["Jordan Sampson", "Eddie Strong"],
     isActive: true,
     balance: 3951,
     gender: "male",
     age: 27
   },
   {
     name: "Blackburn Dotson",
     email: "blackburndotson@furnigeer.com",
     eyeColor: "brown",
     friends: ["Jacklyn Lucas", "Linda Chapman"],
     isActive: false,
     balance: 1498,
     gender: "male",
     age: 38
   },
   {
     name: "Sheree Anthony",
     email: "shereeanthony@kog.com",
     eyeColor: "brown",
     friends: ["Goldie Gentry", "Briana Decker"],
     isActive: true,
     balance: 2764,
     gender: "female",
     age: 39
   }
 ];

//  Доповни функцію getActiveUsers(users) таким чином, 
//  щоб вона повертала масив активних користувачів, 
//  значення властивості isActive яких - true.

// // Change code below this line
// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive === true);
// };
// // Change code above this line

// Доповни функцію getUserWithEmail(users, email) таким чином, 
// щоб вона повертала об'єкт користувача, пошта якого (властивість email) 
// збігається зі значенням параметра email.
 
// const getUserWithEmail = (users, email) => {
//    return users.find(
//       user => user.email === email
//    );
// };
 