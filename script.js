// ================================
// Part 1: Variables and Conditionals
// ================================

let userName = "Rose";
let age = 20;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ================================
// Part 2: Custom Functions
// ================================

// Function 1: Greet user
function greetUser(name) {
  return "Hello, " + name + "!";
}
console.log(greetUser(userName));

// Function 2: Calculate square of a number
function square(num) {
  return num * num;
}
console.log("Square of 5 is:", square(5));

// ================================
// Part 3: Loops
// ================================

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
  console.log("While loop count:", counter);
  counter++;
}

// ================================
// Part 4: DOM Interactions
// ================================

// Get elements
const title = document.getElementById("title");
const description = document.getElementById("description");
const btnChange = document.getElementById("btnChange");
const btnAdd = document.getElementById("btnAdd");
const btnToggle = document.getElementById("btnToggle");
const myList = document.getElementById("myList");

// DOM Interaction 1: Change text content
btnChange.addEventListener("click", function () {
  title.textContent = "Title Changed with JavaScript!";
});

// DOM Interaction 2: Add new list item
btnAdd.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New item added!";
  myList.appendChild(newItem);
});

// DOM Interaction 3: Toggle description visibility
btnToggle.addEventListener("click", function () {
  if (description.style.display === "none") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
});
