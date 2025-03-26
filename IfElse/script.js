// let numbe= prompt('enter a number')
// if( numbe % 2){
//     console.log('even');
// } else{
//     console.log('odd');

// }

// let number = prompt('enter a number');
// if (number % 2 === 0) {
//     console.log('Even');
// } else {
//     console.log('Odd');
// }
// the important code

// let input = prompt('enter a number'); // ورودی رو می‌گیره
// if (isNaN(input) || input === '') {   // اگه عدد نیست یا خالیه
//     console.log('Error: Please enter a valid number!');
// } else {
//     let number = Number(input);       // تبدیل به عدد
//     if (number % 2 === 0) {
//         console.log('Even');
//     } else {
//         console.log('Odd');
//     }
// }

// کد من
// let input=prompt('enter the number...')

// if(isNaN(input) || input ==="") {
//     console.log('pleas enter the right number ...');

// } else{
//     if (input > 0) {
//         console.log('the number is positive');

//     } if( input < 0) {
//         console.log('your number is negetive');

//     } if ( input == 0)  {
//         console.log('the number is zero ');

//     }
// }

// کد چت جی پی تی
// let input = prompt('enter the number...');
// if (isNaN(input) || input === "") {
//     console.log('Please enter the right number...');
// } else {
//     let number = Number(input);
//     if (number > 0) {
//         console.log('The number is positive');
//     } else if (number < 0) 
//         console.log('Your number is negative');
//     } else {
//         console.log('The number is zero');
//     }
// }

let input = prompt("enter ur age ...");

if (isNaN(input) || input === "") {
  console.log("please enter the right number ...");
} else {
  let number = Number(input);
  if (number >= 18) {
    console.log("You can drive!");
  } else if (number < 18) {
    console.log("You’re too young to drive!");
  }
}
