let number = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let newArray = [];

for (let i = 0; i < number.length; i++) {
    let total =0 
    for (let j = 0; j < number[i].length; j++) {
      total+= number[i][j];
    }
    newArray.push(total)
}
console.log(newArray);
