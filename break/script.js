// let text = "";
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { break; }
//   text += "The number is " + i + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

// for(let i = 0; i <= 10; i++){
//   if(i % 2 ==0){

//     continue;
//   }
//   console.log(i);

// }
// sum = 0;
// for (let a = 1; a <= 2; a++) {
//    sum += a;
//   console.log(a);
//   for (let b = 1; b <= 3; b++) {
//      console.log(b);
//     sum += b;
//     console.log(sum);
//   }
//    console.log(sum);
// }

// let str = ''
// for (let i = 1; i <= 2; i++){
//   for(let j = 1; j <= 3; j++){
//     console.log(j);

//     str+=j
//   }
//   str+='\n'
// }
// let num = Number(str)
// console.log(num);
// str+=1
// let num= Number(str)
// console.log(typeof(num));
// console.log(num);

// let str= '';
// for(let i= 1; i <= 5; i++){
//   str+='*'
//   // str+='\n'
//   console.log(str);
// }

// let star = "";
// for (let a = 1; a <= 1; a++) {
//   // console.log(a);
//   for (let b = 5; b <= 5; b++) {
//     star += "*";
//     console.log(star);
//   }
//   for (let c = 4; c <= 4; c++) {
//     star += "*";
//     console.log(star);
//   }
//   for (let d = 1; d <= 1; d++) {
//     star += "*";
//     console.log(star);
//   }
//   for (let e = 1; e <= 1; e++) {
//     star += "*";
//     console.log(star);
//   }
//   for (let f = 1; f<= 1; f++) {
//     star += "*";
//     console.log(star);
//   }
// }

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//   let line = "";
//   for (let j = 1; j <= rows - i; j++) {
//     line += " "; // اضافه کردن فاصله‌ها
//   }
//   for (let k = 1; k <= i; k++) {
//     line += "*"; // اضافه کردن ستاره‌ها
//   }
//   console.log(line);
// }
// let row= '';
// for(let l = 5; l >=1; l--){
//   row+='*'
//   console.log(row);

// }
// let str = ''
// let five = 5;
// for(let f= five; f>= 1; f-- ) {
//   str+='*'
//   console.log(str);

// }
// let n = 5; // تعداد ستاره‌های اولیه
// for (let i = n; i >= 1; i--) {
//   console.log("*".repeat(i));
// }

// let n = 5; // تعداد ستاره‌های اولیه
// for (let i = n; i >= 1; i--) {
//   let star = ""; // متغیر برای ذخیره ستاره‌ها
//   for (let j = 1; j <= i; j++) {
//     star += "*"; // اضافه کردن ستاره به رشته
//   }
//   console.log(star); // چاپ رشته ستاره‌ها
// }

// let str = "";
// for (let l = 1; l <= 5; l++) {
//   for (let k = 5; k >= l; k--) {
//     str += " ";
//   }
//   for (let s = 1; s <= l; s++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// let strr = "";
// for (let i = 1; i <= 5; i++) {
//   for (let a = 5; a >= i; a--) {
//     strr += "*";
//   }
//   strr += "\n";
// }
// console.log(strr);

// let sum = 0;
// for (let x = 0; x <= 10; x++) {
//   sum += x;
//   console.log(x);
//   console.log(sum);
// }
// console.log(sum);
// console.log(sum);

// let result = 0;

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 2; j++) {
//     result += i * j;
//     console.log(result); 
//   }
// }

// console.log(result);

// let sum = 0;
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= i; j++) {
//     sum += j;
//     console.log(`i: ${i}, j: ${j}, sum: ${sum}`);
//   }
// }
// console.log("Final sum:", sum);

// console.log(`here is ${sum}`);

// let result = 0;
// for (let i = 1; i <= 4; i++){
//   for ( let j = 1; j<= 3; j++){
//     result+= i + j
//   }
//   console.log(result);
  
// }

let result = 0;
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= i; j++) {
    result += i * j;
    // console.log(result);
  }
}
console.log(result);
