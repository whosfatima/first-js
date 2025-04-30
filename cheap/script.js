let number = document.getElementById("number");
let check = document.getElementById("check");
let img = document.getElementById("img");

check.onclick = () => {
  if (number.value >= 100 && number.value <= 250) {
    img.src = "./img/1.jfif";
  } else if (number.value >= 251 && number.value <= 400) {
    img.src = "./img/2.jfif";
  } else if (number.value >= 401 && number.value <= 650) {
    img.src = "./img/3.jfif";
  } else if (number.value >= 651 && number.value <= 900) {
    img.src = "./img/4.jfif";
  }
};
