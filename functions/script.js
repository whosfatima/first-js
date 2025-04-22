// function addNumber (){
//   let total= 0;
//   let av = 0
//   for(let i = 0; i< arguments.length; i++ ){
//     total += arguments[i];
//     av = total / arguments.length;
//   }
//   return av;
// }

// console.log(addNumber(1, 2, 3));

// function addNumber(...number) {
//   let total = 0;
//   for (let i = 0; i < number.length; i++) {
//     total += number[i];
//   }
//   let av = total / number.length;
//   console.log(av);
//   if (av >= 12) {
//     return "accept";
//   } else {
//     return "reject";
//   }
// }

// let finall = addNumber(12, 12, 12, 12, 12);
// console.log(finall);

//  function addNumber(){
//   let total=0;
//   let av=0
//   for (let i=0; i< arguments.length; i++){
//     total+= arguments[i];
//     av= total / arguments.length;
//   }
//   console.log(av);
//   if(av >= 12){
//     return 'accept';
//   } else{
//     return 'reject';
//   }

//  }

//  let finall = addNumber(12,12,12,12,12);
//  console.log(finall);

// let result = 1;
// for(let i = 1; i<= 3; i++){
//   result += 2;
// }
// console.log(result);

// function power( base, exponent){
//     let result = 1;
//     for(let i =1; i<= exponent; i++){
//         result *= base;
//     }
//     return result;
// }

// let finall = power(5, 2);
// console.log(finall);

// let number = Number(prompt("enter your number ..."));
// let counter = 0;

// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     counter++;
//   }
// }
// if (counter == 2) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// let number = Number(prompt("enter your number ..."));
// let plus = 0;
// for (let i = 1; i < number; i++) {
//     if()
// }


let number = Number(prompt("Enter a number:"));
let sum = 0;

for (let i = 1; i < number; i++) {
  if (number % i == 0) {
    sum += i;
  }
}

if (sum === number) {
  console.log("Perfect Number");
} else {
  console.log("Not Perfect");
}
