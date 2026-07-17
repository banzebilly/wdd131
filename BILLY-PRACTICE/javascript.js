let name = "Billy";
let lastName = "Banze"
let age = 32;

let fullName = name + " " + lastName

console.log("full name: " , fullName + " " + "age:"  + age)



// Modern JavaScript (Recommended)

// Instead of using +, use Template Literals with backticks (`).

let fullName = 1`${name} ${lastName}`;
console.log(`fullname: ${fullname} Age: ${age}`);

// Data Types

// Exactly like Python.
let age = 30;           // Number
let name = "Billy";     // String
let married = true;     // Boolean
let score = null;       // Null
let city;               // Undefined


console.log(typeof age);


let a = 10;
let b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


// Operators

// Arithmetic

let a = 10;
let b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// Comparison



console.log(5 > 3);

console.log(5 < 3);

console.log(5 == "5");

console.log(5 === "5");

// Notice

// ==

// Only checks value.

// ===

// Checks value AND data type.

// Always use


// in modern javascript. logical operator
let age = 23;
console.log(age > 18 %% age < 30);

console.log(age > 18 || age > 50);
console.log(!(age > 18));



// 2 function coming from python this will feel familia

// in python:
// def greet(name):
// return f"HEllo {name}"

// in javascript

function greet(name) {
    return `Hello ${name}`;
}

console.log(greet ("Billy"));

// Function with two parameters

function add(a,b) {
    return a+b
}
console.log(add (20,30));


// Arrow Functions (Modern JavaScript)

// Instead of
function add(a,b){
    return a+b;
}

// Modern JavaScript
const add = (a,b) => {
    return a+b
} 

// even shorter
const add = (a,b) => a+b;
console.log(add(7,5));

const area = (l,w) => l*w;
console.log(area (43, 33));



for(let i = 0; i<10; i++) {
    conole.log(i);
}



let i = 0

while (i < 10) {
    console.log(i);
    i++
}


// for ..of
let fruits = ["Apple", "maongo", "Banana"];
for(let fruit of fruits) {
    console.log((fruit));
}

// very similar to 
// for fruit in fruits:


// JavaScript Object

const person={
    name:"Billy",
    age:32,
    country:"South Africa"
};

console.log(person.name);
console.log(person.country);

// Module 7 - DOM (Manipulating HTML)

// This is where JavaScript becomes powerful.

// HTM
<h1 id="title">welcome</h1>

const title = document.getElementById("title")
title.textContent = "HEllo Billy"

// change color?
title.style.color="red";
// change background
title.style.backgroudColor="black";

// Hide Element
title.style.display="none"

// Show Again

title.style.display="block";


// selecting elements by id
const box = document.getElementById("box");

// by class
const box = document.querySelector(".box");


// All Classes

const boxes=document.querySelectorAll(".box");



// change HTMl

box.innerHTML="<h2>Hello</h2>";
box.textContent="Hello";



// create html element
const p=document.createElement("p");
p.textContent="New Paragraph";
document.body.appendChild(p);

// delete element
p.remove()




// event HTML
{/* <button id="btn">Click Me</button> */}

const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    alert("Hello Billy");
});


// modern verison

btn.addEventListener("click",() => {
    alert("hello Billy");
})



// Mini Project

// Create a Counter App.

// HT
{/* <h1 id="count">0</h1>

<button id="increase">+</button> */}

{/* <button id="decrease">-</button> */}


let count = 0;

const heading = document.getElementById("count");

document.getElementById("increase").addEventListener("click", () => {
    count++;
    heading.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
    count--;
    heading.textContent = count;
});

// This combines variables, functions, event listeners, and DOM manipulation.

// How we'll learn together

// Since you're taking BYU–Idaho WDD131 and already know Python, I recommend a practical approach:

// JavaScript Basics
// Functions
// Arrays & Objects
// DOM Manipulation
// Events
// Modern ES6+ Features (destructuring, spread, modules)
// Async JavaScript (fetch, Promises, async/await)
// Build 10 mini projects (counter, calculator, to-do app, weather app, quiz, image gallery, etc.)

// This progression mirrors what you'll use in real front-end development and prepares you for frameworks like Reac