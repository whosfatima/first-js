let input= document.getElementById('number');
let button = document.getElementById('button');
let para = document.getElementById('para');

button.onclick= () => {
  if(input.value % 2 ===0) {
    para.innerHTML =('number is even')
  } else{
    para.innerHTML = ('number is odd')
  }
}