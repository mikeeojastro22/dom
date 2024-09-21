console.log("Hello World!");

// document - translated object of the HTML

// console.log(document.getElementById("hello"));

// let a = 20;
// let b = 10;
// if(a > b){
//     document.getElementById("hello").style.backgroundColor = "red";
// }

document.getElementById("hello").style.backgroundColor = "red";

let pTags = document.getElementsByTagName("p");
// checking the value of pTags; is optional
console.log(pTags);
pTags[1].style.backgroundColor = "yellow";

// same as above
// document.getElementsByTagName("p")[1].style.backgroundColor = "yellow";

document.querySelector("div").style.backgroundColor = "purple";
document.querySelector("#second").style.backgroundColor = "purple";
document.querySelector(".third").style.backgroundColor = "purple";

console.log(document.querySelectorAll(".sample"));
document.querySelectorAll(".sample")[2].style.backgroundColor = "green";