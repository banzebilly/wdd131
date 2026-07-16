
// https://developer.mozilla.org/en    
        //  (https://javascript.info/)  
//    https://github.com/getify/You-Dont-Know-JS)         
// (https://bonsaiden.github.io/JavaScript-Garden/)
// (https://www.codecademy.com/learn/introduction-to-javascript)
// (https://stackoverflow.com/questions/tagged/javascript)

// first class function
// (https://jsfiddle.net/)
// (https://eloquentjavascript.net/)
//  https://devdocs.io/javascript/)

// https://cloudconvert.com/png-to-webp


const foo = () => {
    console.log("foobar")
}
foo() // invoke it using the variable 



// Passing a function as an argument

function sayHello() {
    return "HEllo, ";
}



function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}

greeting(sayHello, "javascript!");

// We are passing our sayHello() function as an argument to the greeting() function, this explains how we are treating the function as a value.

// Note: The function that we pass as an argument to another function is called a callback function. sayHello() is a callback function.


function sayHello() {
  return () => {
    console.log("Hello!");
  };
}

// In this example, we are returning a function from another function - We can return a function because functions in JavaScript are treated as values.

// Note: A function that returns a function or takes other functions as arguments is called a higher-order function.

const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected outpu

const math = {
  factorial: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factorial(3); // 3;2;1;


// Using a function as a callback
// More commonly it is used as a callback:

// js

// Copy
button.addEventListener("click", function (event) {
  console.log("button is clicked!");
});
// Using an Immediately Invoked Function Expression (IIFE)


const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0























function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// Expected output: 12
