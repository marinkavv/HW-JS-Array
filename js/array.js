// 0. Створити числовий масив та проініціалізувати його (*випадковими числами).

const numbers = [15, 13, 56, 89, 12, 0, 75, 36, 28, 96, 0, 49];
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

// 4 Вивести елементи з парними індексами.
function doubleIndex (array){
  for (let i=0; i<array.length; i++){
    if(i%2 === 0) {
      console.log(`doubleIndex [${i}] = ${array[i]}`);
    }
  }
}
console.log(doubleIndex (numbers));