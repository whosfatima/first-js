// say hello mini project ...

// let number = document.getElementById("text");
// let Button = document.getElementById("button");
// let para = document.getElementById("para");

// let sayHello = (name) => {
//   return "hello dear " + name;
// };

// Button.onclick = () => {
//   let names = text.value;
//   para.innerText = sayHello(names);
// };

// let number = document.getElementById("age");
// let Button = document.getElementById("button");
// let para = document.getElementById("para");

// let multiplyByTwo = (number) => {
//     let double = number * 2;
//     return double;
// }

// Button.onclick = () => {
//   let num = Number(number.value);
//   para.innerText = multiplyByTwo(num);
// };

// let number = document.getElementById("age");
// let Button = document.getElementById("button");
// let para = document.getElementById("para");

// let CheckAge = (age) => {
//   if (age > 18) return " uhhh... too old";
//   else return " too young kiddo";
// };
// Button.onclick = () => {
//   if (number.value == "") para.innerText = "enter the right age ...";

//   let Age = Number(number.value);
//   para.innerText = CheckAge(Age);
// };

// let color = document.getElementById("text");
// let Button = document.getElementById("button");
// let para = document.getElementById("para");

// let getColor = (colorname) => {
// return `Your favorite color is ${colorname}`;
// };
// Button.onclick = () => {
//   let Color = color.value;
//   para.innerText = getColor(Color);
// };

// let number1 = document.getElementById("number1");
// let number2 = document.getElementById("number2");
// let Button = document.getElementById("button");
// let para = document.getElementById("para");

// let IsPrime = (number) => {
//   if (number < 2) return false;

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// };

// let IsPrime = (Num) => {
//   if (Num < 2) {
//     return `this ${Num} is not prime `;
//   }
//   for (let i = 2; i < Num; i++) {
//     if (Num % i == 0) return `number ${Num} is not Prime`;
//     else return `number ${Num} is Prime`;
//   }
// };

// Button.onclick = () => {
//   if (number.value === "") para.innerText = "wright right number";
//   let num = Number(number.value);
//   para.innerText = IsPrime(num);
// };

let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let Button = document.getElementById("button");
let para = document.getElementById("para");

let IsPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

let rangePrime = (num1, num2) => {
  let PrimeNume = [];
  for (let i = num1; i <= num2; i++) {
    if (IsPrime(i) == true) {
      PrimeNume.push(i);
    }
  }
  return PrimeNume;
};

Button.onclick = () => {
  if(number1.value ==='' || number2.value === '') {
    para.innerText = 'enter right numbers'
    return;
  } 
  let firstNum = Number(number1.value);
  let secondNum = Number(number2.value);
  if ( firstNum > secondNum) {
    para.innerText =' number one must be smaller than number two'
    return;
  }
   para.innerText = "اعداد اول در این بازه: " + rangePrime(firstNum, secondNum).join(", ");
};
