let number = [
  [4, 66, 5, 12, 17, 82, 55],
  [63, 67, 21, 2, 31, 37, 6],
  [8, 9, 91, 22, 35, 72, 33, 1, 4],
];
// let primearray = [];
// let compisitarray = [];

// let Isprime = (n) => {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % 2 == 0) return false;
//   }
//   return true;
// };

// for (let i = 0; i < number.length; i++) {
//   for (let j = 0; j < number[i].length; j++) {
//     let num = number[i][j];
//     if (Isprime(num)) {
//       primearray.push(num);
//     } else if (num > 1) {
//       compisitarray.push(num);
//     }
//   }
// }

// console.log(primearray);
// console.log(compisitarray);


let primeArray=[];
let compisitArray=[];

let IsPrime= (n) => {
  if (n < 2) return false;
  for(let i =2; i <=Math.sqrt(n); i++){
    if (n % 2 ==0){
      return false;
    } 
  }
  return true;
}

for ( let i =0; i < number.length; i++){
  for(let j =0; j < number[i].length; j++){
    let num = number[i][j];
    if (IsPrime(num)){
      primeArray.push(num);
    } else if ( num > 1){
      compisitArray.push(num)
    }
  }
}
console.log(primeArray);
console.log(compisitArray);
