/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const figures = ["♦", "♥", "♠", "♣"];
  const colors = ["red", "black"];
  const figure1 = document.querySelector(".figure1");
  const number = document.querySelector(".number");
  const figure2 = document.querySelector(".figure2");
  const btnChange = document.querySelector("#change-card");

  const randomFigure = figures[Math.floor(Math.random() * 4)];
  const randomColor = colors[Math.floor(Math.random() * 2)];
  const changeColor = () => {
    figure1.innerHTML = randomFigure;
    number.innerHTML = numbers[Math.floor(Math.random() * 13)];
    figure2.innerHTML = randomFigure;

    figure1.style.color = randomColor;
    figure2.style.color = randomColor;
  };

  btnChange.addEventListener("click", changeColor);
};
