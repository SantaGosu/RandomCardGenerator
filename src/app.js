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
  const heart = document.getElementById("Heart");
  const diamond = document.getElementById("diamond");
  let testArr = [heart, diamond];
  document.getElementById("test").innerHTML =
    testArr[Math.floor(Math.random() * testArr.length)];
};
//THEY SAID YOU CAN JUST USE THE VALUES IN STEAD OF ICONS,
//SO USE THE VALUES INSTEAD OF TRYING TO USE FONT AWESOME WHEN YOU GET BACK
