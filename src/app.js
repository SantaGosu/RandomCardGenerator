/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function genNumber() {
  document.getElementById("Number").innerHTML = Math.floor(
    Math.random() * 10 + 1
  );
  let test = document.getElementById("Number");
  test.setAttribute(
    "style",
    "align-self: center; margin-top: 25%; font-size: xxx-large;"
  );
};
