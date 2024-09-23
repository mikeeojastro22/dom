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

let about = document.getElementById("about");
// creating a new div
let newDiv = document.createElement("div");
// creating a new button
let newButton = document.createElement("button");
newButton.textContent = "Alert!";
newButton.style.color = "black";
newButton.style.border = "1px";
newButton.style.margin = "10px";
newButton.style.padding = "15px 30px";
newButton.style.borderRadius = "15px";
newButton.style.backgroundColor = "orange";

newDiv.appendChild(newButton);
about.appendChild(newDiv);

function sayHey(){
    alert("Hey!");
}

// first parameter - action enclosed in quotation marks
// second parameter - declared function
newButton.addEventListener('click', sayHey);

function incrementOne() {
    // This is adding number to string
    // counter.textContent = counter.textContent + 1;
    // counter.textContent += 1;
    let parseToNumber = parseInt(counter.textContent);
    // parseToNumber = parseToNumber + 1;
    parseToNumber += 1;
    counter.textContent = parseToNumber;
}

let counter = document.getElementById("counter");
let increment = document.getElementById("increment");
increment.addEventListener("click", incrementOne);