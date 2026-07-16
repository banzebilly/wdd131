// An array is a data structure that
//  stores multiple values in a single variable instead of declaring
//   separate variables for each value.


let scores = [100, 72, 83, 94, 88, 87];

let names = ['Nancy','Blessing','Jorge','Svetlana'];

let aScore = scores[0];  // The aScore variable is assigned the value of 100
scores[0] = 99; // This assignment expression changed the first score in the array from 100 to 99.

// Arrays can be iterated over using a classic for loop:
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}



// Preferred: Arrays can also be iterated using other looping structures, such as forEach:

scores.forEach(function(score) {
  console.log(score);
});


// Arrays have a length property:

let numScores = scores.length; // The nu


// Array Methods
// Arrays have several methods that can manipulate (change) them:

scores.push(100); // Adds a new element 

scores.pop(); // Removes the last element from the array
scores.shift(); // Removes the first element from the array
scores.unshift(100); // Adds a new element to the beginning of the array
scores.slice(2,3); // Returns a shallow copy from the start index up to, but not including, the end index
scores.splice(2, 1); // Removes 1 element from the array starting at index 2
scores.join(', '); // Transforms the array into a single string using a comma and space as the delimiter
// Reference JavaScript Arrays Reference – MDN


let names = ['Nancy','Blessing','Jorge','Svetlana'];
names[2]; //jorge
// What is the value of the following expression?
names.length; //4

// What does the following expression do?
names.push('Sally');

// Table of Contents:
push()//: //Adding Elements to the End of an Array
pop()//: //Removing the Last Element from an Array
shift(): //Removing the First Element from an Array
unshift()//: Adding Elements to the Beginning of an Array
concat()//: Combining Arrays
slice()//: Extracting a Section of an Array
splice()//: Adding or Removing Elements from an Array
join()//: Joining Array Elements into a String
indexOf()//: Finding the First Index of an Element in an Array
lastIndexOf()//: Finding the Last Index of an Element in an Array