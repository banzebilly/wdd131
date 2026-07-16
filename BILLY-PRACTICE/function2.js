// Functions are fundamental building blocks in JavaScript. They are reusable blocks of code you can call by name to perform specific tasks. Functions can receive input data and return output to the caller.

// "Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value,
//  but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output
// . To use a function, you must define it somewhere in the scope from which you wish to call it." – MD

function square(number) {
  return number * number;
}

// When you pass an array as a parameter, if the function changes any of the array's values,

//  that change is visible outside the function, as shown in the following example:

function myFunc(theObject) {

  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30


// Function declarations and expressions can be nested, which forms a scope chain. For example:


function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}



const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16


// However, a name can be provided with a function
//  expression. Providing a name allows the function to 
//  refer to itself, and also makes it easier to identify the 
//  function in a debugger's stack traces:




const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6



function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}


// Function expressions are convenient when passing a function as 
// an argument to another function. The following example defines 
// a map function that should receive a function as first argument
//  and an array as second argument. Then, it is called with a 
//  function defined by a function expression:

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]



// In JavaScript, a function can be defined based on a condition.
//  For example, the following function definition defines myFunc 
//  only if num equals 0:


let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}










In addition to defining functions as described here, you can also use the Function constructor to create functions from a string at runtime, much like eval().

A method is a function that is a property of an object. Read more about objects and methods in Working with objects.

Calling functions
Defining a function does not execute it. Defining it names the function and specifies what to do when the function is called.

Calling the function actually performs the specified actions with the indicated parameters. For example, if you define the function square, you could call it as follows:

js

Copy
square(5);
The preceding statement calls the function with an argument of 5. The function executes its statements and returns the value 25.

Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code). The scope of a function declaration is the function in which it is declared (or the entire program, if it is declared at the top level).

The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function. The showProps() function (defined in Working with objects) is an example of a function that takes an object as an argument.

A function can call itself. For example, here is a function that computes factorials recursively:

js

Copy
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
You could then compute the factorials of 1 through 5 as follows:

js

Copy
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
There are other ways to call functions. There are often cases where a function needs to be called dynamically, or the number of arguments to a function vary, or in which the context of the function call needs to be set to a specific object determined at runtime.

It turns out that functions are themselves objects — and in turn, these objects have methods. (See the Function object.) The call() and apply() methods can be used to achieve this goal.

Function hoisting
Consider the example below:

js

Copy
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, so the code above is equivalent to:

js

Copy
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
Function hoisting only works with function declarations — not with function expressions. The following code will not work:

js

Copy
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
Recursion
A function can refer to and call itself. It can be referred to either by the function expression or declaration's name, or via any in-scope variable that refers to the function object. For example, consider the following function definition:

js

Copy
const foo = function bar() {
  // statements go here
};
Within the function body, you can refer to the function itself either as bar or foo, and call itself using bar() or foo().

A function that calls itself is called a recursive function. In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case).

For example, consider the following loop:

js

Copy
let x = 0;
// "x < 10" is the loop condition
while (x < 10) {
  // do stuff
  x++;
}
It can be converted into a recursive function declaration, followed by a call to that function:

js

Copy
function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
However, some algorithms cannot be simple iterative loops. For example, getting all the nodes of a tree structure (such as the DOM) is easier via recursion:

js

Copy
function walkTree(node) {
  if (node === null) {
    return;
  }
  // do something with node
  for (const child of node.childNodes) {
    walkTree(child);
  }
}
Compared to the function loop, each recursive call itself makes many recursive calls here.

It is possible to convert any recursive algorithm to a non-recursive one, but the logic is often much more complex, and doing so requires the use of a stack.

In fact, recursion itself uses a stack: the function stack. The stack-like behavior can be seen in the following example:

js

Copy
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  foo(i - 1);
  console.log(`end: ${i}`);
}
foo(3);

// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
Immediately Invoked Function Expressions (IIFE)
An Immediately Invoked Function Expression (IIFE) is a code pattern that directly calls a function defined as an expression. It looks like this:

js

Copy
(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();
Instead of saving the function in a variable, the function is immediately invoked. This is almost equivalent to just writing the function body, but there are a few unique benefits:

It creates an extra scope of variables, which helps to confine variables to the place where they are useful.
It is now an expression instead of a sequence of statements. This allows you to write complex computation logic when initializing variables.
For more information, see the IIFE glossary entry.

Function scopes and closures
Functions form a scope for variables—this means variables defined inside a function cannot be accessed from anywhere outside the function. The function scope inherits from all the upper scopes. For example, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access. On the other hand, the parent function (and any other parent scope) does not have access to the variables and functions defined inside the inner function. This provides a sort of encapsulation for the variables in the inner function.

js

Copy
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
Closures
We also refer to the function body as a closure. A closure is any piece of source code (most commonly, a function) that refers to some variables, and the closure "remembers" these variables even when the scope in which these variables were declared has exited.

Closures are usually illustrated with nested functions to show that they remember variables beyond the lifetime of its parent scope; but in fact, nested functions are unnecessary. Technically speaking, all functions in JavaScript form closures—some just don't capture anything, and closures don't even have to be functions. The key ingredients for a useful closure are the following:

A parent scope that defines some variables or functions. It should have a clear lifetime, which means it should finish execution at some point. Any scope that's not the global scope satisfies this requirement; this includes blocks, functions, modules, and more.
An inner scope defined within the parent scope, which refers to some variables or functions defined in the parent scope.
The inner scope manages to survive beyond the lifetime of the parent scope. For example, it is saved to a variable that's defined outside the parent scope, or it's returned from the parent scope (if the parent scope is a function).
Then, when you call the function outside of the parent scope, you can still access the variables or functions that were defined in the parent scope, even though the parent scope has finished execution.
The following is a typical example of a closure:

js

Copy
// The outer function defines a variable called "name"
const pet = function (name) {
  const getName = function () {
    // The inner function has access to the "name" variable of the outer function
    return name;
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"
It can be much more complex than the code above. An object containing methods for manipulating the inner variables of the outer function can be returned.

js

Copy
const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver
In the code above, the name variable of the outer function is accessible to the inner functions, and there is no other way to access the inner variables except through the inner functions. The inner variables of the inner functions act as safe stores for the outer arguments and variables. They hold "persistent" and "encapsulated" data for the inner functions to work with. The functions do not even have to be assigned to a variable, or have a name.

js

Copy
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
In the code above, we use the IIFE pattern. Within this IIFE scope, two values exist: a variable apiCode and an unnamed function that gets returned and gets assigned to the variable getCode. apiCode is in the scope of the returned unnamed function but not in the scope of any other part of the program, so there is no way for reading the value of apiCode apart from via the getCode function.

Multiply-nested functions
Functions can be multiply-nested. For example:

A function (A) contains a function (B), which itself contains a function (C).
Both functions B and C form closures here. So, B can access A, and C can access B.
In addition, since C can access B which can access A, C can also access A.
Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it. This is called scope chaining. Consider the following example:

js

Copy
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)
In this example, C accesses B's y and A's x. This can be done because:

B forms a closure including A (i.e., B can access A's arguments and variables).
C forms a closure including B.
Because C's closure includes B and B's closure includes A, then C's closure also includes A. This means C can access both B and A's arguments and variables. In other words, C chains the scopes of B and A, in that order.
The reverse, however, is not true. A cannot access C, because A cannot access any argument or variable of B, which C is a variable of. Thus, C remains private to only B.

Name conflicts
When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. More nested scopes take precedence. So, the innermost scope takes the highest precedence, while the outermost scope takes the lowest. This is the scope chain. The first on the chain is the innermost scope, and the last is the outermost scope. Consider the following:

js

Copy
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)
The name conflict happens at the statement return x * 2 and is between inside's parameter x and outside's variable x. The scope chain here is inside => outside => global object. Therefore, inside's x takes precedences over outside's x, and 20 (inside's x) is returned instead of 10 (outside's x).

Using the arguments object
The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:

js

Copy
arguments[i];
where i is the ordinal number of the argument, starting at 0. So, the first argument passed to a function would be arguments[0]. The total number of arguments is indicated by arguments.length.

Using the arguments object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function. You can use arguments.length to determine the number of arguments actually passed to the function, and then access each argument using the arguments object.

For example, consider a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:

js

Copy
function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
You can pass any number of arguments to this function, and it concatenates each argument into a string "list":

js

Copy
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
Note: The arguments variable is "array-like", but not an array. It is array-like in that it has a numbered index and a length property. However, it does not possess all of the array-manipulation methods.

See the Function object in the JavaScript reference for more information.

Function parameters
There are two special kinds of parameter syntax: default parameters and rest parameters.

Default parameters
In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value. This is exactly what default parameters do.

In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are undefined.

In the following example, if no value is provided for b, its value would be undefined when evaluating a*b, and a call to multiply would normally have returned NaN. However, this is prevented by the second line in this example:

js

Copy
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
With default parameters, a manual check in the function body is no longer necessary. You can put 1 as the default value for b in the function head:

js

Copy
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
For more details, see default parameters in the reference.

Rest parameters
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

In the following example, the function multiply uses rest parameters to collect arguments from the second one to the end. The function then multiplies these by the first argument.

js

Copy
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
Arrow functions
An arrow function expression (also called a fat arrow to distinguish from a hypothetical -> syntax in future JavaScript) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are always anonymous.

Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.

Shorter functions
In some functional patterns, shorter functions are welcome. Compare:

js

Copy
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]
No separate this
Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming.

js

Copy
function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

const p = new Person();
In ECMAScript 3/5, this issue was fixed by assigning the value in this to a variable that could be closed over.

js

Copy
function Person() {
  // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
Alternatively, a bound function could be created so that the proper this value would be passed to the growUp() function.

An arrow function does not have its own this; the this value of the enclosing execution context is used. Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function:

js

Copy
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` properly refers to the person object
  }, 1000);
}

const p = new Person();



const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Returns days left in the year


function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let temp = String(hour % 12);
  if (temp === "0") {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}











Given the following code snippet:

let firstName = 'Antonia';
let lastName = 'Francesca';


// Write a function declaration (definition) named fullName with parameters first and last. It should return a single string (a full name) with a space between the values.
// Answer
function fullName(first, last) {
  return `${first} ${last}`;   // string concatenation (first + ' ' + last) is an alternative
}



// Use an anonymous function expression to do the same thing where the function is assigned to a variable named fullName.
// Answer
const fullName = function (first, last) {
  return `${first} ${last}`;
}


// Use an arrow function expression to do the same thing where the function is assigned to a variable named fullName.
// Answer
const fullName = (first, last) => `${first} ${last}`;



// Write an expression that calls the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName
// Answer
document.querySelector('#fullName').textContent = fullName(firstName, lastName);

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions


Build your own function
Previous
Overview: Dynamic scripting with JavaScript
Next
With most of the essential theory dealt with in the previous article, this article provides practical experience. Here you will get some practice building your own, custom function. Along the way, we'll also explain some useful details of dealing with functions.

Prerequisites:	An understanding of HTML and the fundamentals of CSS, familiarity with JavaScript function basics as covered in the previous lesson.
Learning outcomes:	
Experience with building your own custom functions.
Adding parameters to your functions.
Calling your function.
In this article
Let's build a function
The basic function
Calling the function
Improving the function with parameters
Summary
Let's build a function
The custom function we are going to build will be called displayMessage(). It will display a custom message box on a web page and will act as a customized replacement for a browser's built-in alert() function. We've seen this before, but let's just refresh our memories. Type the following in your browser's JavaScript console, on any page you like:

js

Copy
alert("This is a message");
The alert() function takes a single argument — the string that is displayed in the alert box. Try varying the string to change the message.

The alert() function is limited: you can alter the message, but you can't easily vary anything else, such as the color, icon, or anything else. We'll build one that will prove to be more fun.

Note: This example should work in all modern browsers fine, but the styling might look a bit funny in slightly older browsers. We'd recommend you do this exercise in a modern browser like Firefox, Opera, or Chrome.

The basic function
To begin with, let's put together a basic function.

Note: For function naming conventions, you should follow the same rules as variable naming conventions. This is fine, as you can tell them apart — function names appear with parentheses after them, and variables don't.

Start by accessing the function-start.html file and making a local copy. You'll see that the HTML is simple — the body contains just a single button. We've also provided some basic CSS to style the custom message box, and an empty <script> element to put our JavaScript in.

Next, add the following inside the <script> element:

js

Copy
function displayMessage() {
  // …
}
We start off with the keyword function, which means we are defining a function. This is followed by the name we want to give to our function, a set of parentheses, and a set of curly braces. Any parameters we want to give to our function go inside the parentheses, and the code that runs when we call the function goes inside the curly braces.

Finally, add the following code inside the curly braces:

js

Copy
const body = document.body;

const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);

const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);

closeBtn.addEventListener("click", () => body.removeChild(panel));
This is quite a lot of code to go through, so we'll walk you through it bit by bit.

The first line selects the <body> element by using the DOM API to get the body property of the global document object, and assigning that to a constant called body, so we can do things to it later on:

js

Copy
const body = document.body;
The next section uses a DOM API function called document.createElement() to create a <div> element and store a reference to it in a constant called panel. This element will be the outer container of our message box.

We then use yet another DOM API function called Element.setAttribute() to set a class attribute on our panel with a value of msgBox. This is to make it easier to style the element — if you look at the CSS on the page, you'll see that we are using a .msgBox class selector to style the message box and its contents.

Finally, we call a DOM function called Node.appendChild() on the body constant we stored earlier, which nests one element inside the other as a child of it. We specify the panel <div> as the child we want to append inside the <body> element. We need to do this as the element we created won't just appear on the page on its own — we need to specify where to put it.

js

Copy
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
The next two sections make use of the same createElement() and appendChild() functions we've already seen to create two new elements — a <p> and a <button> — and insert them in the page as children of the panel <div>. We use their Node.textContent property — which represents the text content of an element — to insert a message inside the paragraph, and an "x" inside the button. This button will be what needs to be clicked/activated when the user wants to close the message box.

js

Copy
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
Finally, we call addEventListener() to add a function that will be called when the user clicks the "close" button. The code will delete the whole panel from the page — to close the message box.

Briefly, the addEventListener() method can be called on any element on the page, and is usually passed two arguments: the name of an event and a function to run when the event occurs. In this case, the event name is click, meaning that when the user clicks the button, the function will run. You'll learn a lot more about events in our events article. The line inside the function uses the removeChild() method to specify that we want to remove a specific child element of the <body> element: in this case, the panel <div>.

js

Copy
closeBtn.addEventListener("click", () => body.removeChild(panel));
Basically, this whole block of code is generating a block of HTML that looks like so, and inserting it into the page:

html

Copy
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
That was a lot of code to work through — don't worry too much if you don't remember exactly how every bit of it works right now! The main part we want to focus on here is the function's structure and usage, but we wanted to show something interesting for this example.

Calling the function
You've now got your function definition written into your <script> element just fine, but it will do nothing as it stands.

Try including the following line below your function to call it:

js

Copy
displayMessage();
This line invokes the function, making it run immediately. When you save your code and reload it in the browser, you'll see the little message box appear immediately, only once. We are only calling it once, after all.

Now open your browser developer tools on the example page, go to the JavaScript console and type the line again there, you'll see it appear again! So this is fun — we now have a reusable function that we can call any time we like.

However, we probably want the message box to appear in response to user and system actions. In a real application, such a message box would probably be called in response to new data being available, or an error having occurred, or the user trying to delete their profile ("are you sure about this?"), or the user adding a new contact and the operation completing successfully, etc.

In this demo, we'll get the message box to appear when the user clicks the button. Here's the steps you should follow to get this working:

Delete the previous line you added (displayMessage();).

Select the <button> element and store a reference to it in a constant. Add the following line to your code, above the function definition:

js

Copy
const btn = document.querySelector("button");
Create an event listener for button clicks that calls our function. Add the following line after the const btn = one:

js

Copy
btn.addEventListener("click", displayMessage);
In a similar way to our closeBtn's click event handler, here we are calling some code in response to a button being clicked. But in this case, instead of calling an anonymous function containing some code, we are calling our displayMessage() function by name.

Finally, try saving and refreshing the page — now you should see the message box appear when you click the button.

You might be wondering why we haven't included the parentheses after the function name. This is because we don't want to call the function immediately — only after the button has been clicked. If you try changing the line to

js

Copy
btn.addEventListener("click", displayMessage());
and saving and reloading, you'll see that the message box appears without the button being clicked! The parentheses in this context are sometimes called the "function invocation operator". You only use them when you want to run the function immediately in the current scope. In the same respect, the code inside the anonymous function is not run immediately, as it is inside the function scope.

If you tried the last experiment, make sure to undo the last change before carrying on.

Note: For more practice with functions, check out the ScrimbaMDN learning partner challenge Write your first function.

Improving the function with parameters
As it stands, the function is still not very useful — we don't want to just show the same default message every time. Let's improve our function by adding some parameters, allowing us to call it with some different options.

First of all, update the first line of the function:

js

Copy
function displayMessage() {
to this:

js

Copy
function displayMessage(msgText, msgType) {
Now when we call the function, we can provide two variable values inside the parentheses to specify the message to display in the message box, and the type of message it is.

To make use of the first parameter, update the following line inside your function:

js

Copy
msg.textContent = "This is a message box";
to

js

Copy
msg.textContent = msgText;
Last but not least, you now need to update your function call to include some updated message text. Change the following line:

js

Copy
btn.addEventListener("click", displayMessage);
to this block:

js

Copy
btn.addEventListener("click", () =>
  displayMessage("Woo, this is a different message!"),
);
If we want to specify parameters inside parentheses for the function we are calling, then we can't call it directly — we need to put it inside an anonymous function so that it isn't in the immediate scope and therefore isn't called immediately. Now it will not be called until the button is clicked.

Reload and try the code again and you'll see that it still works just fine, except that now you can also vary the message inside the parameter to get different messages displayed in the box!

A more complex parameter
On to the next parameter. This one is going to involve slightly more work — we are going to set it so that depending on what the msgType parameter is set to, the function will display a different icon and a different background color.

First of all, download the icons needed for this exercise (warning and chat) from GitHub. Save them in a new folder called icons in the same location as your HTML file.

Note: The warning and chat icons were originally found on iconfinder.com, and designed by Nazarrudin Ansyari — Thanks! (The actual icon pages were since moved or removed.)

Next, find the CSS inside your HTML file. We'll make a few changes to make way for the icons. First, update the .msgBox width from:

css

Copy
width: 200px;
to

css

Copy
width: 242px;
Next, add the following lines inside the .msgBox p { } rule:

css

Copy
padding-left: 82px;
background-position: 25px center;
background-repeat: no-repeat;
Now we need to add code to our displayMessage() function to handle displaying the icons. Add the following block just above the closing curly brace (}) of your function:

js

Copy
if (msgType === "warning") {
  msg.style.backgroundImage = 'url("icons/warning.png")';
  panel.style.backgroundColor = "red";
} else if (msgType === "chat") {
  msg.style.backgroundImage = 'url("icons/chat.png")';
  panel.style.backgroundColor = "aqua";
} else {
  msg.style.paddingLeft = "20px";
}
Here, if the msgType parameter is set as "warning", the warning icon is displayed and the panel's background color is set to red. If it is set to "chat", the chat icon is displayed and the panel's background color is set to aqua blue. If the msgType parameter is not set at all (or to something different), then the else { } part of the code comes into play, and the paragraph is given default padding and no icon, with no background panel color set either. This provides a default state if no msgType parameter is provided, meaning that it is an optional parameter!

Let's test out our updated function, try updating the displayMessage() call from this:

js

Copy
displayMessage("Woo, this is a different message!");
to one of these:

js

Copy
displayMessage("Your inbox is almost full — delete some mails", "warning");
displayMessage("Brian: Hi there, how are you today?", "chat");
You can see how useful our (now not so) little function is becoming.

Note: If you have trouble getting the example to work, feel free to check your code against the finished version on GitHub (see it running live also), or ask us for help.

Summary
Congratulations on reaching the end! This article took you through the entire process of building up a practical custom function, which with a bit more work could be transplanted into a real project. In the next article, we'll wrap up functions by explaining another essential related concept — return values.


