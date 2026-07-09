let x = 9;
let y = 90;

x += y;
console.log(x) // will be 108

let a = 7;
let b = 3;
let c = a + b; // c is now 10
let d = a * 100; // d is now 700
let e = a % b; // e is now 1\

//==
//Equal to
//x == y
//true if x is equal to y

// ===
// Strict equal to
// x === y
// true if x is equal to y and they are of the same data type


// !=
// Not equal to
// x != y
// true if x is not equal to y


// !==
// Strict not equal to
// x !== y
// true if x is not equal to y or they are of different types

let x = 10;
let y = 5;
let z = x + y;
console.log(z == 15); // true
console.log(z === "15"); // false
console.log(x < y); // false

// Comparison operators return boolean values (true/false)
// They are commonly used in conditional statements and loops to control program flow
// Strict equality (===) checks both value and type, while loose equality (==) checks only value
// Logical Operators
// Logical operators are used to combine multiple boolean expressions and return a boolean value based on the compounded logical operation.

// Operator
// Description
// Example
// Returns
// &&
// Logical AND
// x && y
// true if both x and y are true
// ||
// Logical OR
// x || y
// true if either x or y is true
// !
// Logical NOT
// !x
// true if x is false; false if x is true
// Example:

let a = true;
let b = false;
let c = a && b;
console.log(c); // false
let d = a || b;
console.log(d); // true
let e = !a;
console.log(e); // false
// Key Points:

// Logical operators are used to combine or invert boolean expressions
// They are essential for controlling program flow in conditional statements and loops
// Short-circuit evaluation with && and || stops evaluation as soon as the result is known

// Expressions
// An expression is a combination of values, variables, operators, and functions that are evaluated to produce a single value. Expressions are used to perform calculations, make decisions, and manipulate data in programming.

// Types of Expressions
// Arithmetic Expressions: These expressions involve arithmetic operators (such as +, -, *, /) to perform mathematical calculations.
let result = (5 + 3) * 2;
// String Expressions: These expressions involve string concatenation or manipulation using the + operator or string methods.
let greeting = "Hello, " + "world!";
// Logical Expressions: These expressions use logical operators (such as &&, ||, !) to evaluate boolean values.
let isAdult = age >= 18 && hasID;
// Back to Top
// Decisions
// Conditional structures are used to make decisions in programming. They allow the program to execute different blocks of code based on whether a specified condition is true or false. The most common conditional structures in JavaScript are the if statement, the else statement, and the else if statement.

// if statement: Executes a block of code if a specified condition is true.
// if (condition) {
//   // Code to execute if the condition is true
// }
// The condition is evaluated to a boolean value, i.e., true or false.

// If the condition is true, the code block inside the if statement is executed. If it is false, the code block is skipped.

// Example:
let age = 20;
if (age >= 18) {
  console.log("Price: Adult — you pay full price.");
}
// else statement: Provides an alternative block of code to execute if the condition in the if statement is false.
// if (condition) {
//   // Code to execute if the condition is true
// } else {
//   // Code to execute if the condition is false
// }
// Example:
let age = 16;
if (age >= 18) {
  console.log("Price: Adult — you pay full price.");
} else {
  console.log("Price: Child — you get a discount.");
}
// else if statement: This structure allows for the checking of multiple conditions in sequence.
// if (condition1) {
//   // Code to execute if condition1 is true
// } else if (condition2) {
//   // Code to execute if condition2 is true
// } else {
//   // Code to execute if none of the conditions are true
// }
// Example:
let age = 65;
if (age < 13) {
  console.log("Price: Child — you get a discount.");
} else if (age <= 64) {
  console.log("Price: Adult — you pay full price.");
} else {
  console.log("Price: Senior — you get a discount.");
}
// Switch Statements: Provides a way to execute selective blocks of code based on the value of an expression.
// switch (expression) {
//   case value1:
//     // Code to execute if expression is equal to value1
//     break;
//   case value2:
//     // Code to execute if expression is equal to value2
//     break;
//   // ... more cases ...
//   default:
//     // Code to execute if none of the cases match
// }
// Example:
let day = 3;  
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
// Back to Top
// Loops
// Loops are used to repeat a block of code multiple times until a specified condition is met. The most common loop structures in JavaScript are the for loop, the while loop, and the forEach loop.

// for Loop: Repeats a block of code a specified number of times.
for (let i = 0; i < 10; i++) {
  // Code to execute in each iteration
}
// Example:
for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}
// while Loop: Repeats a block of code as long as a specified condition is true.
// while (condition) {
//   // Code to execute while the condition is true
// }
// Example:
let count = 0;
while (count < 5) {
  console.log("Count is: " + count);
  count++;
}
// forEach Loop: Used with arrays; it iterates over each element of the array.
array.forEach(function(element) {
  // Code to execute for each element
});
// Example:
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
  console.log("Fruit: " + fruit);
});
// Back to Top
// Activity Instructions
// Given the following variable declarations:
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
// Write the following programming snippets in your browser console:
// Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
// Repeat the previous programming snippet by using a while loop.
// Repeat the previous programming snippet by using a forEach loop.
// Repeat the previous programming snippet by using a for...in loop.
// Use any type of loop to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) for the next DAYS days starting today.
// Check Your Understanding – Example Answers
// In this CodePen ⚙️ JavaScript – Get Future Days from Today, look for the loop in the JavaScript panel that generates future day names based on the current day. Fork the pen and modify the code to use a different type of loop than originally implemented (for, while, forEach, for...in).






















// WDD 131
// BYU-I logo
// Home
// W1
// W2
// W3
// W4
// W5
// W6
// W7
// W02 Learning Activity: Document Object Model
// Overview
// A key skill for any front-end web developer is the ability to manipulate the DOM (Document Object Model), a JavaScript object the browser creates after it parses the HTML document. Manipulating the DOM means dynamically reading, editing, updating, or deleting elements and their CSS properties. The DOM is the tree-like representation of your page's structure and content nodes.

// The purpose of this activity is to introduce the HTML DOM and learn how to manipulate the document using JavaScript.

// Associated Course Learning Outcomes
// Demonstrate proficiency with JavaScript language syntax.
// Use JavaScript to respond to events and dynamically modify HTML.

// Prepare
// Video Overview: The JavaScript DOM explained in 5 minutes! – Bro Code
// Reference: Manipulating documents – MDN.
// Note that the Active learning: A dynamic shopping list example found at the end of the MDN article will help you complete this week's activities.

// Practice: Common DOM manipulation concepts and use cases.
// Select an HTML element from the document using the querySelector method.
// This line of code selects the first instance of an article element from the document and assigns it as a reference to the variable named article.
// const article = document.querySelector('article');
// Change the innerHTML property of an existing element.
// This line of code uses an existing variable that references a previously selected element and changes its innerHTML property value.
// article.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent property does not.';
// Change the inline CSS style of an element.
// This line of code changes the text-align CSS property of the selected element.
// article.style.textAlign = 'right';
// Change an attribute of an element.
// This line of code adds a class attribute to the element and assigns it a value.
// article.setAttribute('class', 'active');
// An alternative way to change an element's class attribute is by directly manipulating the element's classList property.

// article.classList.add('active');
// This method is often preferred for class manipulation because classList provides additional methods like add, remove, toggle, and contains, making it more convenient and expressive for managing classes.
// Create an element.
// This line of code creates a new <p> element and stores it in the variable named paragraph.
// const paragraph = document.createElement('p');
// Append content or elements to an element.
// These lines of code add content to the end of the article element.
// article.appendChild(paragraph);
// article.append(paragraph, 'Hello World Addition!');
// The append() method allows you to include multiple arguments to append to the element in the specified order.

// Remove an element from the document.
// These lines of code remove the paragraph from the article and then remove the article itself.
// article.removeChild(paragraph);
// article.remove();
// Activity Instructions
// Example screen shot of Book of Mormon chapter application
// This Book of Mormon application will be expanded upon in future learning activities. We will start by building the interface and implementing basic DOM manipulation.

// This app allows users to enter their favorite Book of Mormon chapters and display them in a list that updates automatically on the screen. Entries can then be deleted from the list.

// Create an HTML file named "bom.html" in the week02 folder.
// Your bom.html HTML document should include the basic meta tags and an appropriate title.
// Create an external CSS file and a JavaScript file, placing them in appropriate subfolders within the week02 folder.
// Check Your Understanding
// Copy and paste the basic interface (the HTML and CSS) from the following CodePen ☼ BOM Top 10.
// In your blank JavaScript file, declare three variables that hold references to the input, button, and list elements.
// Check Your Understanding
// Create a li element that will hold each entry's chapter title and an associated delete button.
// Check Your Understanding
// Create a delete button.
// Check Your Understanding
// Populate the li element variable's textContent or innerHTML with the input value.
// Check Your Understanding
// Set the delete button's textContent to ❌.
// Check Your Understanding
// Append the delete button to the li element.
// Check Your Understanding
// Append the li element variable to the unordered list in your HTML.
// Check Your Understanding
// So far, you have set up the interface and completed some basic DOM interaction. The application will not work at this point. The next activity will teach you how to respond to events, such as button clicks. You also need to wait for the user to enter a chapter into the text field before processing.

// You need to consider screen readers and how they will interpret content. For example, the delete button only displays an emoticon and may not be correctly identified by screen readers as a button to remove a chapter. What can we do? One solution is to add an aria-label attribute to the button with a value like "Close" or "Remove Alma 5". The aria-label attribute defines a string value that labels the element for assistive technologies.

// <button aria-label="Close" id="close-button">❌</button>
// This helps screen readers understand the button's purpose, making your application more accessible.

// Submission
// Continuously save your work. We will add additional functionality in the next activity.
// Week 02 Home
// Copyright © Brigham Young University-Idaho | All rights reserved















// W02 Learning Activity: Handling DOM Events
// Overview
// Handling DOM events in JavaScript is a fundamental part of building interactive web pages. In this activity, you'll learn about the different events you can handle, how to handle them, and how to pass data between the event handler and the rest of your code.

// "Events are things that happen in the system you are programming—the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs. Events are fired inside the browser window and tend to be attached to a specific item that resides in it." – MDN

// Prepare
// Reference: Introduction to Events – MDN
// Practice: Common DOM event concepts and use cases. These are just a few examples; there are many other events and use cases.
// Click Event: Triggered when a user clicks on an element. It's widely used for handling button clicks, link clicks, or any interaction involving a mouse click.
// buttonElement.addEventListener('click', function() {
//   // Code to execute when the element is clicked
// });
// The addEventListener method takes two arguments: the event name and a function to execute when the event is triggered. This function is called an event handler. We will learn more about writing functions later in the course. For now, just know that the function is a block of code that will execute when the event is triggered. The function is also called a callback function because it is "called back" when the event is triggered.

// Keyup Event: Triggered when a key is released. Useful for handling keyboard input.
// buttonElement.addEventListener('keyup', function() {
//   // Code to execute when a key is released
// });
// DOMContentLoaded Event: Triggered when the HTML document has been completely parsed and all deferred scripts have been executed. It's widely used for initializing JavaScript applications.
// document.addEventListener("DOMContentLoaded", function() {
//   // Code to execute when the DOM is parsed
// });

// Activity Instructions
// Example screen shot of Book of Mormon chapter application
// This activity adds functionality to the BOM Top 10 application started in the previous learning activity on DOM manipulation. We will organize the code to respond to the Add Chapter button click to build the list item. In addition, delete button functionality will be added along with some user interface improvements.

// Open your JavaScript file that is supporting the bom.html application, if needed.
// Create a click event listener for the Add Chapter button with addEventListener.
// Check Your Understanding
// Within the Add Chapter button click event function block (between the opening and closing braces of the callback function { ... }), complete the following tasks:
// Check to make sure the input is not blank before completing the remaining tasks in this list. Use an if block that either provides a message or does nothing and returns the .focus() to the input field.
// Check Your Understanding
// Move the code that you wrote in the last activity into this if block to support the correct flow of the program.
// Check Your Understanding
// Add an event listener to the delete button that removes the li element when clicked.
// Check Your Understanding
// This event listener demonstrates Event Delegation, which is an efficient way to handle events on multiple elements (the BOM chapters). Instead of adding an event listener to each individual delete button, you add a single event listener to each delete button as it is created. This approach is especially useful when elements are dynamically added to the DOM.

// Change the input value to an empty string to clean up the interface for the user.
// Check Your Understanding
// After processing, the focus (active cursor) should be sent to the input element.
// Check Your Understanding
// Example Solution
// Testing & Submission
// Thoroughly test your application in the browser. This can be done locally.
// What else would you add to increase this application's usability?
// Ideas to consider
// Commit and push your work to your GitHub Pages enabled wdd131 repository.
// Optional Resources
// Introduction to Events – MDN
// Event Delegation as a part of Event Bubbling – MDN














// W02 Learning Activity: Responsive Menus
// Overview
// In this activity you will build a responsive menu using JavaScript. The menu adapts to different viewport sizes and responds when the user clicks a "hamburger" button (≡). In responsive design, the goal is to give users a positive, familiar experience across devices.

// Associated Course Learning Outcome(s)
// Prepare
// Hamburger menus (or similar patterns) support responsive design by saving space and cleaning up layouts. The icon is widely recognized by users, even if they do not know it by name.

// Here is an example from Google Maps.

// Screenshot of Google Maps – Hamburger Button example

// Watch this example application of a responsive menu in this video demonstration:
// Video Demonstration: ▶️ Responsive Hamburger Menu – [ 6:14 minutes ]
// CodePen ☼ Responsive Menu
// Activity Instructions
// In your own CodePen account, fork this CodePen ☼ Responsive Menu – Start
// CSS: Move the hamburger menu button to the upper right corner by adding the appropriate CSS declarations where the blanks (______) are indicated.
// JavaScript: Complete the JavaScript code by filling in the blanks (______) within the menu button event listener.
// The click event toggles a class on the navigation element; that class already exists in CSS and controls whether the menu is shown.
// CSS: Change the hamburger button closing icon ❎ to something of your choice that would be appropriate.
// What does the :: syntax in the CSS rule selector do?
// CSS: Wayfinding – Add a rule for the "active" class to indicate the current page by visually changing that menu item.
// In this example the active class is applied to the About page.
// <a href="#" title="About Us" class="active">About Us</a>
// "Making it easy for people to navigate around a website or application helps everyone find what they need quickly and effectively. Clear wayfinding especially helps people with visual, mobility, or cognitive impairments who may otherwise find it difficult to understand where they are and how to get where they want to go." – Harvard University – Digital Accessibility

// Be sure to Save your changes on your CodePen.
// CodePen: Example Solution

// Week 02 Home