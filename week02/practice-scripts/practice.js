let age = 20
if (age >= 18) {
    console.log("Price You need to pay full amount")
}


if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}



let age = 16;
if (age >= 18) {
  console.log("Price: Adult — you pay full price.");
} else {
  console.log("Price: Child — you get a discount.");
}


// else if statement: This structure allows for the checking of multiple conditions in sequence.
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if none of the conditions are true
}

let age = 65;
if (age < 13) {
  console.log("Price: Child — you get a discount.");
} else if (age <= 64) {
  console.log("Price: Adult — you pay full price.");
} else {
  console.log("Price: Senior — you get a discount.");
}

// Switch Statements: Provides a way to execute selective blocks of code based on the value of an expression
switch (expression) {
  case value1:
    // Code to execute if expression is equal to value1
    break;
  case value2:
    // Code to execute if expression is equal to value2
    break;
  // ... more cases ...
  default:
    // Code to execute if none of the cases match
}


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



// Loops are used to repeat a block of code multiple times until a specified condition is met. 
// The most common loop structures in JavaScript are the for loop, the while loop, and the forEach loop.

for (let i = 0; i < 10; i++) {
  // Code to execute in each iteration
}

for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}

// while Loop: Repeats a block of code as long as a specified condition is true.
while (condition) {
  // Code to execute while the condition is true
}

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




// Write the following programming snippets in your browser console:
// Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
// Repeat the previous programming snippet by using a while loop.
// Repeat the previous programming snippet by using a forEach loop.
// Repeat the previous programming snippet by using a for...in loop.
// Use any type of loop to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) for the next DAYS days starting today.

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

  // for loop
  for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }

  // while loop
  let i = 0;
  while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
    i++;
  }

  // forEach loop
  studentReport.forEach(function (item) {
  if (item < LIMIT) {
    console.log(item);
  }
  });

  // for...in loop
  for (let i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  }