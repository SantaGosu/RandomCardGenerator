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
  document.getElementById("number").innerHTML =
    arr[Math.floor(Math.random() * arr.length)];

  let SecondArr = ["♥", "♦", "♣", "♠"];
  let genNumber = SecondArr[Math.floor(Math.random() * SecondArr.length - 1)];
  document.getElementsByClassName("suit").innerHTML = SecondArr[genNumber];
};

//innerHTML = arr[ranNumber -1]      .querySelect = rand[ranNum - 1];
