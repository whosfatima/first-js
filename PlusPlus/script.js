// let numbers =[2, 3, 4, 9, 5, 1, 8]
// let counter = 0;
// let even = 0;

// for( let i = 0; i<=numbers.length; i++){
//   if (numbers[i] % 2 ==0){
//     counter+= numbers[i];
//   even++;
//   }
// }
// console.log(counter);
// console.log(even);

// let numbers = [2, 7, 3, 8, 1, 4];
// let total = 0;
// let counter = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 != 0) total += numbers[i];
//   if (numbers[i] > 5) counter++;
// }

// console.log(total);
// console.log(counter);

let numbers = [5, 12, 7, 3, 18, 21, 4];
let NewArray = [];
let counter = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0 && numbers[i] > 10) counter++;

  if (numbers[i] % 2 !== 0 && numbers[i] < 10)    NewArray.push(numbers[i]);

}

console.log(NewArray);
console.log(counter);
