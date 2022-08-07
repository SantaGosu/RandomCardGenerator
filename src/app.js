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
  // let CardIcons = document.getElementById("Icon");
  // CardIcons.innerHTML = Math.floor(Math.random() * 4 + 1);

  // const arr = ["one", "two", "three", "four", "five"];
  // let random = document.getElementById("test2");
  // random.innerHTML = arr[Math.floor(Math.random() * arr.length)];
  // test.setAttribute("style", "margin: 0px; padding: 0px;");
};
