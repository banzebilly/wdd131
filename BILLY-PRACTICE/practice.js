let c = 4;

let y = 5;

c += y;


// console.log(c);

// let z = c + y;
// console.log(y == c)
// console.log(y === c)
// console.log(c < y)
// console.log(c > y)



// var a = true
// var b = false

// let d = a || b; //Logical OR
// console.log(d)

// let e = ! a;
// console.log(e)


// let c = a && b      //Logical AND


// Expressions
// An expression is a combination of values, variables, operators, and functions that are evaluated to produce a single value.
// Expressions are used to perform calculations, make decisions, and manipulate data in programming.

// Types of Expressions
// Arithmetic Expressions: These expressions involve arithmetic operators (such as +, -, *, /) to perform mathematical calculations.
// 

let result = (4 +3) * 9

// string methods.
let greeting = "hello" + "world"

// Expressions: These expressions use logical operators (such as &&, ||, !) to evaluate boolean values.
let isAdult = age >= 18 && hasID;

// Decisions conditional structures are used to make decisions in programming
//they allow the program to execute different blocks of code based on whether a specified conditions is true or false.
let age = 20
if (age >= 18){
    console.log("you passed")
}else {
    console.log("You faled")
}

// else if statement:

let age = 65;
if (age < 13) {
  console.log("Price: Child — you get a discount.");
} else if (age <= 64) {
  console.log("Price: Adult — you pay full price.");
} else {
  console.log("Price: Senior — you get a discount.");
}

// Switch Statements: Provides a way to execute selective blocks
//  of code based on the value of an expression.

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
// Loops
// Loops are used to repeat a block of code multiple times until a specified condition is met.
//  The most common loop structures in JavaScript are the for loop, the while loop, and the forEach loop.

// for Loop: Repeats a block of code a specified number of times.
for (let i = 0; i < 10; i ++) {

}

for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}

// while Loop: Repeats a block of code as long as a specified condition is true.
while (condition) {

}

let count = 0;
while (count < 5 ) {
    console.log("count is :" + count);
    count ++;
}

// forEach Loop: Used with arrays;
//  it iterates over each element of the array.

array.forEach(function (element) {
    console.log("code to execute for each element");
});

// exemple
let fruits = ["banana", "mango", "orange"];
fruits.forEach(function(fruit) {
    console.log("fruit:" + fruit);
});




// exercice
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 32, 33, 78, 80];
//Write a for loop that will iterate through the studentReport array and 
// print to the console the current array value if it is below 30.
// Repeat the previous programming snippet by



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