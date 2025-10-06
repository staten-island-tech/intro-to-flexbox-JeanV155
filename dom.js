const button = document.querySelector(".btn");
const box = document.querySelector(".box") ;
function makeRGB(event) {


 
let r = Math.floor(Math.random()* 256)
let g = Math.floor(Math.random()* 256)
let b = Math.floor(Math.random()* 256)

box.style.backroundcolor= 'rgb(${r}, ${g}, ${b}';
}
button.addEventListener("click", makeRGB);