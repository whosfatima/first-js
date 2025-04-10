function addNumber (){
  let total= 0;
  let av = 0
  for(let i = 0; i< arguments.length; i++ ){
    total += arguments[i];
    av = total / arguments.length;
  }
  return av;
}

console.log(addNumber(1, 2, 3));

 