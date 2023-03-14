//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

function findMin(a, b) {
    return Math.min(a, b);
  }
  
  console.log(findMin(5, 9)); 

  //Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

  function printEvenFromMax(a, b) {
    let start = Math.max(a, b);
    let end = Math.min(a, b);
    
    while (start >= end) {
      if (start % 2 === 0) {
        console.log(start);
      }
      start--;
    }
  }
  
  printEvenFromMax(10, 5); 
  

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power(base, exponent = 2) {
    return Math.pow(base, exponent);
  }
  
  console.log(power(5)); 
  console.log(power(3, 3)); 

// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function sumToN(n) {
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    
    return sum;
  }
  
  console.log(sumToN(5));
  
// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел,
//      а затем сумму нечетных).

function sumEvenOdd(n, m) {
    let sumEven = 0;
    let sumOdd = 0;
    
    for (let i = n; i <= m; i++) {
      if (i % 2 === 0) {
        sumEven += i;
      } else {
        sumOdd += i;
      }
    }
    
    console.log(`Сумма четных чисел: ${sumEven}`);
    console.log(`Сумма нечетных чисел: ${sumOdd}`);
  }
  
  sumEvenOdd(1, 10);
  
// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'

function findLongestString(arr) {
    if (arr.length === 0) {
      return null;
    }
    let longestString = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longestString.length) {
        longestString = arr[i];
      }
    }
    return longestString;
  }
  
  const arr = ['one', 'two', 'three'];
  console.log(findLongestString(arr)); 
  


  