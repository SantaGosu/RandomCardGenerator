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

  let cardSuit = genSuit();

  document.getElementsByClassName("suit")[0].innerHTML = cardSuit;
  document.getElementsByClassName("suit")[1].innerHTML = cardSuit;
  suitColor(cardSuit);

  function genSuit() {
    let suitArr = ["♥", "♦", "♣", "♠"];

    return suitArr[Math.floor(Math.random() * suitArr.length)];
  }

  function suitColor(getSuit) {
    if (getSuit == "♥") {
      document.getElementsByClassName("suit")[0].style.color = "Red";
      document.getElementsByClassName("suit")[1].style.color = "Red";
    } else if (getSuit == "♦") {
      document.getElementsByClassName("suit")[0].style.color = "Red";
      document.getElementsByClassName("suit")[1].style.color = "Red";
    }
  }
};
