// 0. Створити числовий масив та проініціалізувати його (*випадковими числами).

const numbers = [15, 13, 56, -2, 89, 10, 12, 0, 75, 36, 28, 96, 0, 49, -3];
console.log("numbers :>> ", numbers);

// 1. Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.

numbers.push(99); //додати елемент до кінця
numbers.pop(); // Видалити останній елемент
numbers.shift(); // Видалити початковий елемент
numbers.unshift(26);

// 2. Вивести розмір масиву.
console.log("numbers.len :>> ", numbers.length);

// 3. Зробити копію масиву.
const coppyArray = numbers.slice();
console.log("coppyArray :>> ", coppyArray);

// Не використовувати методи перебору масивів (forEach, filter, map, findIndex), а використати цикли
// 4 Вивести елементи з парними індексами.
function doubleIndex (array){
  for (let i=0; i<array.length; i++){
    if(i%2 === 0) {
      console.log(`елемент з парним індексом [${i}] = ${array[i]}`);
    }
  }
}
console.log(doubleIndex (numbers));

// 5 Вивести лише парні елементи (парні числа діляться на 2 без залишку).
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`парний елемент [${i}] = ${numbers[i]}`);
  }
}

// 6 Вивести індекси нульових елементів (елемент дорівнює нулю).

function zeroNumber(array){
  for (let i=0; i<array.length; i++){
    if(array[i] === 0) {
      console.log(`${i} елемент дорівнює нулю`);
    }
  }
}
console.log(zeroNumber(numbers));

// Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).

// 8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).
const zero = [-1, 5, 0, 9, -10];

function noZero(item) {
  return item !== 0;
}

const noZeroArray = zero.filter(noZero);
console.log('Містить лише ненульові числа :>> ', noZeroArray);

// 9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3).
const arr = [99, 5, 0, 9, 30];

function dividedBy100(item){
  return item/100;
}

arr2 = arr.map(dividedBy100);
console.log('number divided by 100 :>> ', arr2);

// 10 Вивести елементи масиву, зведені у куб.
const arr3 = [2,4,6,8,10];

function threeCubed(item){
  return item**3;
}

arr4 = arr3.map(threeCubed);
console.log('елементи масиву, зведені у куб :>> ', arr4);

// 11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує.
function findIndex(item){
  return item**2 === 100; 
}
arr5 = numbers.findIndex(findIndex);
console.log('індекс елемента, квадрат якого дорівнює 100 :>> ', arr5);

if(arr5 === -1){
  console.log('елемента, квадрат якого дорівнює 100, не існує');
}

// 12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами).
function doubleNumber(item){
  if (item % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

arr7 = numbers.every(doubleNumber);
console.log(arr7);

// 13 *Перевірити, чи є у масиві бодай один від'ємний елемент.
function negativeNumber(item){
  return item < 0;
}
arr8 = numbers.some(negativeNumber);
console.log('чи є у масиві бодай один відємний елемент :>> ', arr8);