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

  // let heart.styles = "♥";
  let suitArr = ["♥", "♦", "♣", "♠"];
  let genNumber = suitArr[Math.floor(Math.random() * suitArr.length)];
  document
    .getElementById("card")
    .getElementsByClassName("suit")[0].innerHTML = genNumber;
  document
    .getElementById("card")
    .getElementsByClassName("suit")[1].innerHTML = genNumber;
};

//innerHTML = arr[ranNumber -1]      .querySelect = rand[ranNum - 1];
