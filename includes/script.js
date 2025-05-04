// let numbers = [2, 7, 3, 8, 1, 4, 7, 55, 3, 10, 8, 8, 100];

// let NewArray = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (NewArray.includes(numbers[i]) == false) {
//     NewArray.push(numbers[i]);
//   }
// }
// console.log(NewArray);
// console.log(numbers);

let numbers = [10, -6, -2, 5, 12, -17, 20, -12, 65, -89];
let positivenumbers = [];
let negetivenumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) negetivenumbers.push(numbers[i]);
  else positivenumbers.push(numbers[i]);
}
console.log(positivenumbers);
console.log(negetivenumbers);
