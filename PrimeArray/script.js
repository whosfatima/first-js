// let matrix = [
//   [3, 15, 8, 22],
//   [11, 7, 12, 19],
//   [6, 30, 1, 13],
// ];

// let primeArray = [];
// let compositeArray = [];

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     let num = matrix[i][j];
//     if (isPrime(num)) {
//       primeArray.push(num);
//     } else if (num > 1) {
//       compositeArray.push(num);
//     }
//   }
// }

// console.log(primeArray);
// console.log(compositeArray);

let number1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let number2 = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];
let newarray = [];
let total = 0;
for (let i = 0; i <number1.length; i++) {
  for (let j = 0; j <number1[i].length; j++) {
    if (number1[j] == number2[j] ) {
      total += number1[j] + number2[j];
    }
  }
  newarray.push(total);
}
console.log(total
);

console.log(newarray);
