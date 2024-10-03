function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;
    const taskList = document.getElementById("taskList");

    // creating the elements
    const listItem = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = taskText;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        label.classList.toggle("completed");
    }

    // appending the elements
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
    taskInput.value = "";
}

function editName() {
   let name = document.querySelector("#name");
   let header = document.querySelector(".header");
   header.textContent = `Good evening, ${name.value}`;
}
  
document.getElementById("editButton").addEventListener("click", editName);

document.getElementById("addButton").addEventListener('click', addTask);

let time = document.getElementById("time");
// declaring built in object from JS
let date = new Date();
// time.textContent = date;
time.textContent = `${date.getHours()}:${date.getMinutes()}`;
console.log(date.getHours());
console.log(date.getMinutes());

const quotes = [
    "Time is gold",
    "Time is everything",
    "Time is money",
    "Time is short"
];
let randomNumber = Math.random() * quotes.length;
let newNumber = Math.floor(randomNumber);
document.getElementById("randomQuote").textContent = quotes[newNumber];
