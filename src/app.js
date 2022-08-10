/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

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

  function genNumber() {
    let suitArr = ["♥", "♦", "♣", "♠"];
    suitArr[Math.floor(Math.random() * suitArr.length)];

    if (document.getElementsByClassName("heart").value === "♥") {
      document.getElementsByClassName("heart").style.color = "Red";
    } else if (document.getElementsByClassName("diamond").value === "diamond") {
      document.getElementById("diamond").style.color = "Red";
    }
  }

  document.getElementsByClassName("suit")[0].innerHTML = genNumber();
  document.getElementsByClassName("suit")[1].innerHTML = genNumber();
};
// can do else if