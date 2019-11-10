import "core-js/stable";
import "regenerator-runtime/runtime";

import "./style.scss";

document.querySelector("h1").textContent += "!!!";

let x = [3, 5, 8];
console.log(...x);
