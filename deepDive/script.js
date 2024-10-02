document.getElementById("hello").style.backgroundColor = "red";

let things = document.getElementsByClassName("things");
console.log(things);

// error: Uncaught Reference
// things.style.backgroundColor = "yellow";

for(let i = 0; i < things.length; i++){
    things[i].style.backgroundColor = "yellow";
    console.log(i);
}

let sample = document.querySelector("#sample");
sample.style.fontSize = "50px";

// gets the first occurence of class classSample and applies the style to it
let classSample = document.querySelector(".classSample");
classSample.style.fontSize = "50px";

let classSampleArray = document.querySelectorAll(".classSample");
for(let i = 0; i < classSampleArray.length; i++){
    classSampleArray[i].style.fontSize = "50px";
}

let journal = document.getElementById("journal");
journal.textContent = "I updated the journal text content";

// textContent
// innerHTML
// innerText

let myList = document.getElementById("my-list");

// innerHTML - reads both the HTML markup and the text content of the element. This means, when you use it to set the content of elements, you can include HTML tags and the browser will render them correctly.

// myList.innerHTML = myList.innerHTML + "<li>Task 4</li>";
myList.innerHTML += "<li>Task 4</li>";

// innerText -  it returns the text as it appears on screen. It ignores the HTML tags. And it also minds the styling (i.e. display: none;). Comment this out to see.

// myList.innerText += "<li>Task 5</li>";

// textContent - ignores all HTML tags and returns only the text. While innertext reads text as it is rendered on the screen, textContent reads text as it is in the markup. Comment this out to see.

// myList.textContent += "<li>Task 5</li>";

let navigation = document.querySelector("nav");
console.log(navigation.innerHTML);
console.log(navigation.innerText);
console.log(navigation.textContent);

let orange = document.getElementById("target");
orange.classList.add("orange");

let target2 = document.getElementById("target2");
target2.classList.remove("orange");

// adds class red to firsth2 element
document.getElementById("firsth2").classList.toggle("red");

// removes class red from secondh2 element
document.getElementById("secondh2").classList.toggle("red");

const league = document.getElementById("league");

const superHeroes = [
    "Batman",
    "Superman",
    "Wonder Woman",
    "The Flash"
];

// createElement
for(let i = 0; i < superHeroes.length; i++){
    let newElement = document.createElement("li");
    newElement.textContent = superHeroes[i];
    league.appendChild(newElement);
}

// innerHTML
for(let i = 0; i < superHeroes.length; i++){
    league.innerHTML += `<li>${superHeroes[i]}</li>`;
}