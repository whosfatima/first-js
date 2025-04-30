let button = document.getElementById("button");
let ageInput = document.getElementById("age");

button.onclick = function () {
  if (ageInput.value >= 18) {
    alert("welcome");
  } else {
    alert("you are too samll kiddo ...");
  }
};
