// let i = 0

// do{
//   console.log(i);
//   i++
// }
// while(i <=12);

// let sum= 0
// for(let num = 10; num <= 90; num++){
// console.log(sum);

//   sum+=num
// }
// console.log(sum);
// let counter = 0;
// let num= Number(prompt('enter a numer'))
// for(let i = 1; i <= num; i++){
//   if(num % i == 0){
//     // console.log(num);
//     counter++

//     // console.log(counter);
//   }
// }
// if(counter == 2){
//   console.log('aval');

// } else{
//   console.log('morakab')

// }

// let num= prompt('enter a number')

// for( let i = 1; i <= 1; i++){
//   let Num= Number(num);
//   if(Num % 3 ==0){
//     console.log('fuzz');

//   } else if (Num % 5 ==0){
//     console.log('buzz');

//   } else( Num % 3 ==0 && Num % 5 ==0 )
//     console.log('FizzBuzz');

// }

// let num = Number(prompt('Enter a number'));

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log('FizzBuzz');
// } else if (num % 3 === 0) {
//   console.log('Fizz');
// } else if (num % 5 === 0) {
//   console.log('Buzz');
// } else {
//   console.log(num); // اگر بر ۳ و ۵ بخش‌پذیر نبود، خودش را چاپ کن
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// sum = 0
// let nume = prompt('enter a number ;')
// let lengthh= nume.length
// for( let i = 1; i > 0; i++){

// }
// console.log( lengthh);
// for(let i = 0; )
// while(Number(nume)){
//   sum+= nume
//   console.log(sum);
// }

// let number = Number(lengthh)

// let nume = prompt("enter a number:");
// let sum = 0;

// for (let i = 0; i < nume.length; i++) {
//   sum += Number(nume[i]); // هر رقم رو به عدد تبدیل می‌کنیم و به sum اضافه می‌کنیم
// }

// console.log(sum);

let nume = prompt("enter a number:");
let sum = 0;
for( let i = 0; i < nume.length; i++){
  if( nume[i] % 2 != 0){
    sum += Number(nume[i]);
  }
}
 console.log(sum);
