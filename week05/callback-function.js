 function calculate(a,b, callback){
    callback( a+b);
 }


 function displayResult(result) {
    console.log(("The result is:" + result))
 }

 calculate( 2, 3, displayResult);


//  1. forEach()
// Accepts a callback function and executes the given fucntion once for each element of the 
const nums = [43, 56, 2, 4, 5];
nums.forEach(function(num){
   console.log(num);
});



const employees = [
   {
      id: 101,
      name:"Alex",
      sal:10000
   },
   {
      id: 102,
      name:"Eddo",
      sal:30000
   },
   {
      id: 103,
      name:"Paul",
      sal:40000
   }
]

employees.forEach(function(emp){
   console.log(emp.name.toUpperCase())
})




// 2. map()
// the map function create s a new array with the result ofo calling the callback function on each element of array
//example square the each element of arrray and store result into another array
numbers = [1, 2, 3, 4];
const squareNums = numbers.map(function(num) {
   return num * num
})

console.log(squareNums)


// Example — 2 | Create an array of all employee names by fetching employee names from a given object.


const names = employees.map(function(emp){
   return emp.name;
})

console.log(names)



// Example — 3 | Make abbreviations
const words = ['lol','brb','btw','lmk','g2g'];
const abbreviations = words.map(function(word) {
      return word.toUpperCase().split('').join('.');
});
console.log(abbreviations); // ['L.O.L', 'B.R.B', 'B.T.W', 'L.M.K', 'G.2.G']

// Arrow Functions
// Arrow functions are syntactically compact alternatives to the regular function expression. It is a modern style of writing function that is more compact.

// How to write arrow functions?
// Consider a simple function expression that calculate the square of a number as shown in the example below.

const square = function(num) {
    return num * num;
}

// Now to convert the above function into arrow function do the following steps…

// Remove the function keyword.
// write the function definition after arrow (=>)
// Parenthesis() are optional for one argument.
// For one-liner function, it is optional to enclose statement into block, also return statement are optional for one-liner functions.

// Arrow function
const square = (num) => {
   return num * num;
};

//witout parenthesis
const square = num =>{
   return num * num;
};

//inplict return - one liner
const square = num => num * num


// Arrow function makes it easy to write the callback function with compact syntax. Let’s review
//  some to the examples discussed above with arrow function.

// examples
numbs = [1,2,3,4,5,6];
numbs.forEach(num => console.log(num*num));

// example2
const squareN = numbs.map(num => num*num)
console.log(squareN) //[1,4,9,16,26,36]


// example3
const parityList = numbs.map(num => (num%2===0 ? 0 : 1));
console.log(parityList)

// 3. find()
// Return the first element from the array which satisfies the given callback function.

// Example — 1: Find the name
const names = ['Jimmy Shah','Ram Sharma','Vikram Gupta','Shyam Sharma'];
const result = names.find(name => name.includes('Sharma'))
console.log(result); // Ram Sharma
// Example — 2: Find employee who earn more than 20,000.

const emp = employees.find(e => e.sal >= 20000)
console.log(emp) // {id: 102, name: 'Clark', sal: 23000}

// 4. filter()
// Creates a new array with all elements that pass the test implemented by the provided callback function.

// Example — 1: Filter names
const names = ['Jimmy Shah','Ram Sharma','Vikram Gupta','Shyam Sharma'];
const result = names.filter(name => name.includes('Sharma'))
console.log(result); //  ['Ram Sharma', 'Shyam Sharma']
// Example — 2: Filter employees by salary
const employees = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 23000
    },
    {
        id: 103,
        name: 'John',
        sal: 22000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
];
const filtered = employees.filter(e => e.sal >= 20000)
console.log(filtered);
// Output:
[ 
  {id: 102, name: 'Clark', sal: 23000},
  {id: 103, name: 'John', sal: 22000},
  {id: 104, name: 'Tony', sal: 20000}
]
// 5. every()
// This function checks that every item in the array passes the callback function. It returns boolean value.

// Example — 1:
const words = ['kia','karen','king','korean'];
// Check all words starts with k
console.log(words.every(word => word[0] === 'k')) // true
// Check all words ends with g
console.log(words.every(word => word[words.length-1] === 'g')) // false
// 6. some()
// This method is much similar to the every() method but the difference is that it returns true if any of the item(s) in the array passes the given function.

const words = ['kia','karen','king','korean'];
// Check all words starts with k
console.log(words.some(word => word[0] === 'k')) // true
// Check all words ends with g
console.log(words.some(word => word[words.length-1] === 'g')) // true
// 7. Sort()
// We are all aware about sorting, but sort function by default performs Natural order sorting( Treat everything as string and compare character by character ). But we can pass a compare callback function to update the behavior of sorting.

// Syntax(compareFunc(a,b))

// Compare function takes two items a and b from the array and compares them.

// If a-b > 0 then it sorts in ascending order.
// if a-b < 0 then it sorts in descending order.
// Example — 1: Natural Order Sorting
const nums = [1,20,10,22,30,44,100,11];
nums.sort(); // [1, 10, 100, 11, 20, 22, 30, 44]
// Example — 2: Ascending order sorting
const nums = [1,20,10,22,30,44,100,11];
nums.sort((a,b) => a - b); // [1, 10, 11, 20, 22, 30, 44, 100]
// 8. reduce()
// It executes a reducer method on each element of array and results in a single value.

// Example — 1: Sum of array elements
const nums = [1,2,3,4,5];
let output = nums.reduce((accumulator,currentValue) => accumulator + currentValue);
console.log(output); //15
// You can understand the execution by the following figure…

// reduce() method execution
// Observe the execution figure, In the first call first value is considered as accumulator and iteration starts from second value.










// A common use of callback functions in JavaScript is for asynchronous operations,
//  such as handling events or making asynchronous requests. Here is a simulated example:


function fetchData(callback) {
  // using setTimeout to simulate fetching data from a server
  setTimeout(() => {
    // This calls the 'callback' function and passes data to it.
    callback('Data has been fetched');
  }, 2000); // This simulates a 2-second delay from a service.
}

// function that processes the data
function processData(data) {
  console.log("Data received:", data);
}

// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);



// Call the calculate function and pass it the arguments needed to produce the console output 2 + 3.
//  Note that you will pass three arguments total: two numbers and a callback function.
function fetchData(callback) {
  // using setTimeout to simulate fetching data from a server
  setTimeout(() => {
    // This calls the 'callback' function and passes data to it.
    callback('Data has been fetched');
  }, 2000); // This simulates a 2-second delay from a service.
}

// function that processes the data
function processData(data) {
  console.log("Data received:", data);
}

// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);