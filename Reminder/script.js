// let number = prompt("enter a number ...");
// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//   if (number[i] % 2 != 0) {
//     sum+= Number(number[i])
//   }
// }
// console.log(sum);

// if (number <= 0) {
//   let number = prompt("enter a number ...");
//   let sum = 0;

//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 == 0) {
//     }
// }
// console.log(sum);
// } else {
//     console.log("please enter a right number ...");
// }
// sum += Number(number[i]);

// let number = prompt('please enter a number')
// let sum=0

// if(isNaN(number)){
//     console.log('please enter the right number ...');

// } else{
//         for (let i = 0; i < number.length; i++) {
//           if (number[i] % 2 != 0) {
//             sum+= Number(number[i])
//           }
//         }
//         console.log(sum);
//     }

//     console.log(number[3]);

// let number = prompt("please enter a number ...");
// let counter = 0;

// if (isNaN(number)) {
//   console.log("please enter a right number ...");
// } else {
//   for (let i = 0; i < number.length; i++) {
//     if (Number(number[i]) % 2 == 0) {
//       // counter += number[i].length;
//       counter++;
//     }
//   }
//   console.log(counter);
// }

// let number = prompt("please enter a number");
// let counter = 0;

// if (isNaN(number)) {
//   console.log("enter a right number ...");
// } else{
//   for( let i =0; i < number.length; i++){
//     counter++
//   }
//   console.log(counter);

// }
// let number = prompt("enter a number ...");
// let counter = 0;
// if (isNaN(number)) {
//   console.log("please enter the right number ...");
// } else {
//   for (let i = 0; i < number.length; i++) {
//     if (Number(number[i]) === 7) {
//       counter++;
//     }
//   }
//   console.log(counter);
// }
// let number = prompt("enter a number ...");
// let counter = 0;
// if (isNaN(number)) {
//   console.log("please enter the right number ...");
// } else {
//   for (let i = 0; i < number.length; i++) {
//     if (Number(number[i]) % 2 == 0 && Number(number[i]) > 3 ) {
//       counter++;
//     }
//   }
//   console.log(counter);
// }

// let number = [1, 2, 3, 5];
// let sum = 0;
// let avrage = 0;

// for (let i =0; i < number.length; i++){
//   sum+=number[i];
//   avrage= sum / number.length
// }
// console.log(avrage);

let number = [1, 2, 3, 5,8,4,2,19,22];
for (let i =0; i < number.length; i++){
  if(number[i] % 2 ==0){
    console.log(number[i]);
    
  }
}