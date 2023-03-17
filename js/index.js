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



