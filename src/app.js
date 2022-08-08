/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function genCard() {
  const arr = [
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
    "K",
    "Q",
    "J",
    "A"
  ];
  document.getElementById("Number").innerHTML =
    arr[Math.floor(Math.random() * arr.length)];
  let NumElement = document.getElementById("Number");
  NumElement.setAttribute(
    "style",
    "align-self: center; margin-top: 25%; font-size: xxx-large;"
  );

  let testArr = ["♦ ♦", "♥ ♥", "♠ ♠", "♣ ♣"];
  document.getElementById("test").innerHTML =
    testArr[Math.floor(Math.random() * testArr.length)];
};
