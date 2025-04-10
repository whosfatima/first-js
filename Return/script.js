// function AddNumber( num1, num2){
//   return num1 + num2;
// }
// let x = AddNumber ( 10, 5)
// console.log(x);

// let aaddnum= function(num3, num4){
//   return num3 + num4;
// }
//  let a = aaddnum(3, 5);
// console.log(a);

function finall(num1, num2, num3, num4, num5) {
  let total = num1 + num2 + num3 + num4 + num5;
  let av = total / 5;
  console.log(av);

  if (av >= 12) {
    return "pass";
  } else {
    return " fall";
  }
}
console.log(finall(20, 5, 1, 18, 20));

let numberArray = [5, 8, 15, 20, 7];
let total = 0;
let av = 0;

for (let i = 0; i < numberArray.length; i++) {
  total += numberArray[i];
  av = total / numberArray.length;
}
if (av >= 12) {
  console.log("pass");
} else {
  console.log("failed");
}
// console.log(av);
