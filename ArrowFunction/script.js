// let number = Number(prompt("enter a number"));

// function Isprime(number){
//   let count = 0;
//   for(let i=1; i<= number; i++){
//     if(number % i ==0){
//       count++
//     }
//   }
//   if(count == 2){
//     return count;
//   } else{
//     return count
//   }
// }
// function IsPrime(number) {
//   if (number < 2) return false;
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(Isprime(number));

// let number = Number(prompt("enter a number"));

// function IsPrime(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % number == 0) {
//       return IsPrime(i);
//     }
//   }
// }

// console.log(IsPrime(number));

// let number = Number(prompt("enter a number"));

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let i = 2; i < number; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// let number = Number(prompt("enter a number"));

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let i = 2; i < number; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// console.log(isPrime(number));

// let number= Number(prompt('enter a number ...'))

// function countSpecialOdds(n) {
//   let count = 0;
//   for (let i = 1; i < n; i++) {
//     if (i % 2 !== 0 && i % 3 === 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countSpecialOdds(number));

// let number = Number(prompt("enter a number ..."));

// function plus(n) {
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     if (i % 2 === 0) sum += i;
//   }
//   return sum;
// }

// console.log(plus(number));

let num1 = Number(prompt("enter a numebr"));
let num2 = Number(prompt("enter a numebr"));

function PrintPrimes(n) {
  if (n < 2) console.log("false");

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function rangePrime(num1, num2) {
  let result = [];
  for (let i = num1 + 1; i < num2; i++) {
    if (PrintPrimes(i) == true) {
      result.push(i);
    }
  }

  return result;
}

console.log(rangePrime(num1, num2));
