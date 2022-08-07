/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function genCard() {
  document.getElementById("Number").innerHTML = Math.floor(
    Math.random() * 4 + 1
  );
  let NumElement = document.getElementById("Number");
  NumElement.setAttribute(
    "style",
    "align-self: center; margin-top: 25%; font-size: xxx-large;"
  );
  let CardIcons = document.getElementById("Icon");
  CardIcons.innerHTML = Math.floor(Math.random() * 4 + 1);
};
