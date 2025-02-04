// your JavaScript file
const container = document.querySelector("#container");

// create header
const header = document.createElement("h3");
header.classList.add("header");
header.textContent = "I'm a blue h3!";
header.style.color = "blue";

container.appendChild(header);

// create paragraph
const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

// create div
const newDiv = document.createElement("div");

newDiv.style.backgroundColor = "pink";
newDiv.style.borderColor = "black";

// add header to newDiv
const header1 = document.createElement("h1");
header1.classList.add("header1");
header1.textContent = "I'm in a div!";
newDiv.appendChild(header1);

// add paragraph to newDiv
const paragraph1 = document.createElement("p");
paragraph1.classList.add("paragraph1");
paragraph1.textContent = "ME TOO!";
newDiv.appendChild(paragraph1);

// append new div to container
container.appendChild(newDiv);
