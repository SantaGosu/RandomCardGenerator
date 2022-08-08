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
  document.getElementById("card").innerHTML =
    arr[Math.floor(Math.random() * arr.length)];
  let NumElement = document.getElementsByClassName("card");

  // document.getElementById("test").innerHTML =
  //   testArr[Math.floor(Math.random() * testArr.length)];
};
