// let number1 = document.getElementById("number1");
// let number2 = document.getElementById("number2");
// let button = document.getElementById("button");
// let para = document.getElementById("para");

// let power = (base, exponent) => {
//   let result = 1;
//   for (let i = 1; i <= exponent; i++) {
//     result *= base;
//   }
//   return result;
// };

// button.onclick = () => {
//     if(number1.value =='' || number2.value ==''){
//         para.innerText= `please enter the right number ...`
//         return
//     }
//   let num1 = Number(number1.value);
//   let num2 = Number(number2.value);
//   para.innerText = `the power numbe is ${power(num1, num2)}`;
//   return;
// };

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let button = document.getElementById("button");
let buttonHide = document.getElementById("buttonHidden");

let changecolor = (element, color) => {
  element.style.backgroundColor = color;
  return;
};
let hidecolor = (element, color) => {
  element.style.display = "none";
  return;
};

button.onclick = () => {
  changecolor(box1, "pink");
  changecolor(box2, "hotpink");
};
buttonHide.onclick = () => {
  hidecolor(box1);
  hidecolor(box2);
};
