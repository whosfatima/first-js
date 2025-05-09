// let number = [
//   [5, 0, 7, 11, 99, 60, 22],
//   [55, 9, 87, 12, 11, 1, 35],
//   [55, 9, 8, 12, 11, 1, 35],
//   [5, 9],
// ];
// let maxval = [];

// for (let i = 0; i < number.length; i++) {
//   let max = number[i][0];

//   for (let j = 1; j < number[i].length; j++) {
//     if (number[i][j] < max) {
//       max = number[i][j];
//     }
//   }
//   maxval.push(max);
// }

// console.log(maxval);

let number = [
  [5, 0, 7, 11, 99, 60, 22],
  [55, 9, 8, 12, 11, 1, 32],
  [55, 9, 8, 11, 1, 35],
  [5, 9],
];
let even = [];
let odd = [];
let max = [];

for (let i = 0; i < number.length; i++) {
  for (let j = 0; j < number[i].length; j++) {
    if (number[i][j] % 2 === 0) even.push(number[i][j]);
    else odd.push(number[i][j]);
  }
}
console.log(odd);
console.log(even);

let maxodd = odd[0];
for (let i = 0; i < odd.length; i++) if (odd[i] > maxodd) maxodd = odd[i];
max.push(maxodd);

let maxeven = even[0];
for (let i = 0; i < even.length; i++) if (even[i] > maxeven) maxeven = even[i];
max.push(maxeven);
console.log(max);
