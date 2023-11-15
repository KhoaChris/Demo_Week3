const displayScreen = document.getElementById("display-screen");

const number7 = document.getElementById("num-7");
const number8 = document.getElementById("num-8");

const sumBtn = document.getElementById("sum-btn");

number7.onclick = function () {
  displayScreen.innerHTML += "7";
};

number8.onclick = function () {
  displayScreen.innerHTML += "8";
};

sumBtn.onclick = function () {
  if (displayScreen.innerHTML == '') {
    displayScreen.innerHTML = "+";
  } else {
    displayScreen.innerHTML += "+";
  }
};
