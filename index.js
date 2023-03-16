//2.7 Встроенные объекты
/*Задание 1
const str="js";
str.toUpperCase();
console.log (str.toUpperCase());
*/

/*Задание 2
const str = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const searchStart = 'ко';

str.forEach((str) => {
	// проходимся по массиву str и проверяем каждый элемент на наличие 
	// подстроки 'ко' в начале названия, не забыв привести элемент и
	// искомую подстроку к одному регистру
	if (str.toLowerCase().startsWith(searchStart.toLowerCase())) {
		console.log(str);
	}
});

const str = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const searchStart = 'ко';

function findStr(arr, str) {
  return arr.filter(element =>
    element.toLowerCase().startsWith(str.toLowerCase()))
}

console.log(findStr(str, searchStart));

console.log(findStr(str, searchStart));
*/

/*Задание 3
const number=32.58884;
console.log (Math.floor(32.58884),Math.ceil(32.58884),(Math.round(32.58884)));
 */

/*Задание 4
const number=[52, 53, 49, 77, 21, 32];
Math.min(52, 53, 49, 77, 21, 32);
console.log(Math.min(52, 53, 49, 77, 21, 32), Math.max(52, 53, 49, 77, 21, 32));
 */

/*Задание 5
function getRandomIntInclusive(minValue,maxValue) {

  return Math.round(Math.random() * (maxValue - minValue)) + minValue; 
}
console.log(getRandomIntInclusive(1,10))
*/

/*Задание 6
function getRandomArrNumbers(randomNumber) {
  let sixthArray = [];
  let arrLength = Math.floor(randomNumber / 2)
  for (let i = 0; i < arrLength; i++) {
      sixthArray.push(Math.round(Math.random() * randomNumber));
  }
  console.log(sixthArray);
}
getRandomArrNumbers(Number(prompt('Введите любое число')));
*/

/*Задание 7
let RandomValue = (maxValue, minValue) => {
  let RandomResult = Math.round(Math.random() * (maxValue - minValue) + minValue);
  console.log(RandomResult);
}
RandomValue(Number(prompt('Введите любое число')), Number(prompt('Введите любое число, значение которого меньше, чем у первого числа')));
*/

/*Задание 8 
let myDate = new Date("15 March 2023");
console.log(myDate); 
// Wed Mar 15 2023 00:00:00 GMT+0300 (Москва, стандартное время)
*/

/*Задание 9 
let currentDate=new Date("15 March 2023");
console.log(currentDate);
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate)
*/

/*Задание 10 Комментарии из теории дз (оставила, чтобы не забыть)
// создадим массив, в который занесем дни недели на русском
// отсчет в JS начинается с воскресенья - 0
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// создадим массив, где будем хранить названия месяцев на русском
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); // здесь мы получаем текущую дату
let fullDate = "Сегодня: " + myDate.getDate() + // getDate возвращает число
" " + months[myDate.getMonth()] + // getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
" " + myDate.getFullYear() + // getFullYear возвращает год
", " + days[myDate.getDay()] + 
" " + myDate.getHours() +
":" + myDate.getMinutes() +
":" + myDate.getSeconds();// getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days

console.log(fullDate);
*/

/*Задание 11 
function gameWord() {
let game = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
game = list.sort(() => Math.random() - 0.5);
alert(game)
let elementOne=(prompt("Чему равнялся первый элемент массива?"))
elementOne=elementOne.toLowerCase()
let elementTwo=(prompt("Чему равнялся последний элемент массива?"))
elementTwo=elementTwo.toLowerCase()
if (elementOne.toLowerCase()===game[0] && elementTwo.toLowerCase()===game[6]) {
  return alert("Вы угадали");
} 
else if (elementOne.toLowerCase()===game[0]||elementTwo.toLowerCase()===game[6]) {
  return alert ("Вы угадали один из двух правильных ответов");
}
else {
  return alert ("Вы не угадали ни одного правильного ответа");
}
}
function gameWord()
*/
//2.6 Массивы

/*Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
  if (numbs[i]===10) break;
  console.log (numbs[i]);
}
*/

/*Задание 2
let numbs=[1, 5, 4, 10, 0, 3];
numbs = numbs.includes (4);
console.log (numbs);
*/

/*Задание 3
let numbs=[1, 3, 5, 10, 20];
numbs=numbs.join (" ");
console.log (numbs);
 */

/*Задание 4
let numbs = [
[1, 1, 1],
[1, 1, 1],
[1, 1, 1]
];
for (let numbsI of numbs) {
  for (let element of numbsI) {
    console.log (element); //найдёт все элементы многомерного массива
  }
  }
  */

/*Задание 5
  let numbs=[1, 1, 1];
  numbs.push (2, 2, 2);
  console.log (numbs);
*/

/*Задание 6
let numbs=[9, 8, 7, 'a', 6, 5];
numbs.sort();
numbs.pop ('a');
console.log (numbs);
*/

/*Задание 7
let numbs=[9, 8, 7, 6, 5];
let enterNumbers=numbs.includes(Number(prompt("Введите число от 1 до 10")));
if (enterNumbers===true) {
  alert("Данное число есть в массиве");
} else {
  alert("Данное число отсутсвует в массиве");
}
*/

/*Задание 8 (1-й способ)
function reverseString (str){
  return str.split("").reverse ().join("");
}
console.log(reverseString ('abcdef'))

Задание 8 (2-й способ)
let str='abcdef';
str.split ("");
console.log (str.split(""));
str.split("").reverse ();
console.log (str.split("").reverse ());
str.split("").reverse ().join("");
console.log (str.split("").reverse ().join(""));
*/

/*Задание 9 
let numbsMulti =[
  [1, 2, 3,],
  [4, 5, 6],
  ];
  let sign=[","];
  numbsMulti=numbsMulti.join(sign);
  console.log (numbsMulti) //Обединение многомерного массива в один
*/

/*Задание 10 
const numbs = [1, 2, 3, 4, 5];
for (let i = 0; i < numbs.length; i++) {
 if (numbs[i + 1]) 
   console.log (numbs[i]+numbs[i+1]);
}
*/

/*Задание 11
*/

/*Задание 12
*/

//2.5 Функции
/*Задание 1
function number(a,b) {
  if (a>b) {
    return b;
  } 
  else if (a<b) {
    return a;
  }
  else {
    return a;
  }
}
console.log (number(8,8));
*/

/*Задание 2
function showMessage () {
const number=prompt("Ввведите число"); 
  if (number % 2 == 0) {
    alert ('Число четное');
  } 
  else {
    alert ('Число нечетное');
  }
}
showMessage ();
*/

/*Задание 3.1
const a = Number(prompt("Ввведите число"));

function calc(a) {
  return a**2;
}

console.log (`Квадрат числа равен ${calc(a)}`);
*/

 /*Задание 3.2
const a = Number(prompt("Ввведите число"));

function calc(a) {
  return alert(a**2);
}

calc(a);
*/

/*Задание 4
function user () {
  const question=prompt("Сколько вам лет?"); 
    if (question<=0) {
      alert ("Вы ввели неправильное значение");
    } 
    else if (question>0 && question<=12) {
      alert ("Привет, друг!");
    }
    else {
      alert ("Добро пожаловать!");
    }
  }
  user ();
 */

/*Задание 5
  function enterNumber (a, b) { 
    if(!isNaN(a) && !isNaN(b)) { 
       return alert(a * b); 
}    else { 
        alert ("Одно или оба значения не являются числом"); 
}
}
enterNumber (6, 6);
*/

/*Задание 6
function enterNumber () {
  const number=Number(prompt("Введите число")); 
    if (!isNaN(number)) {
      return alert(`${number} в кубе равняется ${number**3}`);
    } 
    else {
      alert ("Переданный параметр не является числом");
    }
  }
  enterNumber ();
*/
/*
function season () {
  let number=Number(prompt("Укажите месяц времени года — число от 1-12."));
    if (number===1 || number===2 || number===12) {
      return alert("Время года зима");
    } 
    else if (number===3 || number===4 || number===5) {
      return alert ("Время года весна");
    }
    else if (number===6 || number===7 ||number===8) {
      return alert ("Время года лето");
    }
    else if (number===9 || number===10 ||number===11) {
      return alert ("Время года осень");
    }
    else {
      alert ("Вы ввели параметр который не относится ко времени года");
    }
}
*/
//2.4 Циклы

/*Задание 1
 let hi=0
while (hi<2) {
  console.log ("Привет");
  hi++;
 }
*/

/*Задание 2
let a=1;
while (a<=5) {
  console.log (a);
  a++;
}
*/

/*Задание 3
let a=7;
while (a<=22) {
  console.log (a);
  a++;
}
*/

/*Задание 4
const obj= {
  "Коля":"200",
  "Вася":"300",
  "Петя":"400",
};
for (let name in obj) {
  console.log (`${name} - зарплата ${obj[name]} долларов`);
};
*/

/*Задание 5
let num=0;
for (let n = 1000; n>50; n/=2, num++) {
  console.log (num,n);
}
*/

/*Задание 6
for (let Friday = 3; Friday<=31; Friday++) {
  Friday+=7;
  console.log (`Сегодня пятница, ${Friday}-е число. Необходимо подготовить отчет.`);
}
*/

//2.3 Условное ветвление 

/*Задание 1
let password=("пароль");
let enterPassword=prompt("Введите пароль");
if (enterPassword===password) {
	alert ("Пароль введен верно");
} else {
	alert("Пароль введен неправильно");
}
*/

/*Задание 2
let c=prompt("Введите число");
if (c>0 && c<10) {
	console.log ("Верно");
	} 
else {
	console.log ("Неверно");
}
*/

/*Задание 3
let d=prompt("Введите первое число");
let e=prompt("Введите второе число");
if (d>100 || e>100) {
	console.log ("Верно");
	} 
else {
	console.log ("Неверно");
}
*/

/*Задание 4
let a =  Number('2');
let b = Number('3');
alert(a + b);
*/

/*Задание 5
let mounth = prompt("Укажите месяц");
  switch (mounth) {
    case "1":
      alert("Зима");
      break;
    case "2":
      alert("Зима");
      break;
    case "3":
      alert("Весна");
      break;
    case "4":
      alert("Весна");
      break;
    case "5":
      alert("Весна");
      break;
    case "6":
      alert("Лето");
      break;
    case "7":
      alert("Лето");
      break;
    case "8":
      alert("Лето");
      break;
    case "9":
      alert("Осень");
      break;
    case "10":
      alert("Осень");
      break;
    case "11":
      alert("Осень");
      break;
    case "12":
      alert("Зима");
      break;
    default:
      alert("Неверно");
      break;
  }
*/

/*Задание 8
let clientOS=Number(prompt("Если у вас Android - 1, если iOS - 0"));
if (clientOS===1) {
  console.log("Установите версию приложения для Android по ссылке");
} else if (clientOS===0) {
  console.log("Установите версию приложения для iOS по ссылке");
}
else {
  console.log ("Указали неверное число");
}
*/

/*Задание 9
let clientOS=Number(prompt("Если у вас Android - 1, если iOS - 0"));
let clientDeviceYear=Number(prompt("Укажите год выпуска вашего устройства"));
if (clientOS===1 && clientDeviceYear>=2015) {
  alert("Установите версию приложения для Android по ссылке");
} else if (clientOS===0 && clientDeviceYear>=2015) {
  alert("Установите версию приложения для iOS по ссылке");
}
else if (clientOS===1 && clientDeviceYear<=2015) {
  alert ("Установите облегченную версию приложения для Android по ссылке");
}
else if (clientOS===0 && clientDeviceYear<=2015) {
  alert ("Установите облегченную версию приложения для iOS по ссылке");
}
else {
  alert ("Указали неверное число");
}
*/

//2.2 Переменные. Типы данных

/*Задание 10
const nameUser=prompt("Как вас зовут?");
alert (`Привет, ${nameUser}!`)
*/

/*Задание 9.4 
let info=prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
*/

//Задание 9.3 delete user ["city of residence"];

//Задание 9.2 user ["age"]=20;

//Задание 9.1 user ["city of residence"]=Novorossiysk;

/*Задание 9.0 
let user = {
	name: 'Aleksandra',
	age: 24, 
	isAdmin: true,
}
*/

/*Задание 8 
let age=prompt("Сколько вам лет?");
alert(age);
*/

/*Задание 7
let num = 1;
num +=5;
num -=3;
num *=7;
num /=3;
num +=1;
num -=1;
alert(num);
*/

/*Задание 6
let a=9;
let b=2;
let result=alert(a%b);
*/

/*Задание 5
let numberTwo=(2);
let result=alert(numberTwo**5);
*/

/*Задание 4
let number10=10;
let number2=2;
let resultPlus=alert(number10+number2);
let resultMinus=alert(number10-number2);
let resultMultiply=alert(number10*number2);
let resultDivision=alert(number10/number2);
*/

//Задание 3 const creator=alert("Brendan Eich");

//Задание 2 const year=alert(2007);

/*Задание 1 
Let a=10;
Alert(a);
a=20; 
Alert (a);
*/


