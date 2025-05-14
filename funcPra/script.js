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

let color = document.getElementById("text");
let Button = document.getElementById("button");
let para = document.getElementById("para");

let getColor = (colorname) => {
return `Your favorite color is ${colorname}`;
};
Button.onclick = () => {
  let Color = color.value;
  para.innerText = getColor(Color);
};
