const button = document.querySelector(".btn");

function makeRGB() {
const box = document.querySelector(".box") ;
let r = Math.floor(Math.random()* 256)
let g = Math.floor(Math.random()* 256)
let b = Math.floor(Math.random()* 256)
console.log("hello")

box.style.backgroundColor= `rgb(${r}, ${g}, ${b}`;
}
button.addEventListener("click", makeRGB);