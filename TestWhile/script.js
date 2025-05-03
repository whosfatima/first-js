let num11 = document.getElementById("number1");
let num21 = document.getElementById("number2");
let button = document.getElementById("caculat");
let para = document.getElementById("para");

button.onclick = () => {
  let num1 = Number(num11.value);
  let num2 = Number(num21.value);
  let total = 0;
  if (num1 >= num2) {
    para.innerText = "wrong number ...";
  } else {
    while (num1 <= num2) {
      total += num1;
      num1++;
    }
  }
  if (total > 0) {
    para.innerHTML = total;
  }
};
