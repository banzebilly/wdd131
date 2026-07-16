//array practice method by billy

const fruits = ["Banana", "apple", "Mongo", "orange"]

fruits.push("cocomber")

const removeFruit = fruits.pop("Banana")

console.log(fruits)
console.log(removeFruit)

// for (let i  = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }


fruits.forEach(function (fruit) {
    console.log(fruit)
})


const cars = ['BMW', 'Mercedes', 'Audi'];
const shiftedCar = cars.shift();
console.log(shiftedCar); // Output: "BMW"


// Explanation:
// shift() removes the first element from an array and returns that element.
//  It's like saying goodbye to the car at the front of the line – sorry BMW, but it's time to hit the road!

// Real-Life Use Case:
// Imagine you're managing a car dealership, and you want to keep track of the cars as they're sold. 
// You can use shift() to remove the first car from your array of available inventory as it drives off the lot.

// 4. unshift(): 🛣️
// Clear the runway and make way for the unshift() method! This versatile function 
// lets you add one or more elements to the beginning of your array, paving the way for new arrivals.

const animals = ['lion', 'tiger', 'leopard'];
const newLength = animals.unshift('cheetah', 'panther');
console.log(newLength); // Output: 5

// Explanation:
// unshift() adds one or more elements to the beginning of an array and returns the new 
// length of the array. In this example, we're welcoming the cheetah and panther to the jungle of animals.

// Real-Life Use Case:
// Picture yourself as the curator of a zoo, preparing to introduce new species to the public. You can use unshift() 
// to add the latest arrivals to your array of exhibit animals at the front of the line.


// 5. concat(): 🤝
// It's time to bring out the welcome mat and extend a friendly hand with the concat()
//  method! This cooperative function lets you merge two or more arrays into a single, harmonious array.

const fruits1 = ['apple', 'banana'];
const fruits2 = ['cherry', 'orange'];
const allFruits = fruits1.concat(fruits2);
console.log(allFruits); // Output: ["apple", "banana", "cherry", "orange"]
// Explanation:
// concat() combines two or more arrays and returns a new array containing the merged elements. 
// It's like hosting a fruit salad party and inviting all the fruits to come together for a delicious mix!

// Real-Life Use Case:
// Imagine you're compiling a list of ingredients for a recipe, and some ingredients are stored in separate arrays.
//  You can use concat() to combine all the arrays into a single list of ingredients for easy reference.

// 6. slice(): 🍰
// Slice up some fun with the slice() method! This handy tool lets you cut out a portion of 
// your array and serve it up as a fresh slice of data goodness.

const pizzaToppings = ['pepperoni', 'mushrooms', 'onions', 'sausage', 'green peppers'];
const vegetarianSlice = pizzaToppings.slice(1, 4);
console.log(vegetarianSlice); // Output: ["mushrooms", "onions", "sausage"]
// Explanation:
// slice() extracts a section of an array and returns a new array containing the selected elements. 
// It's like slicing a pizza – you can choose exactly which toppings you want on your slice!

// Real-Life Use Case:
// Imagine you're planning a pizza party, and some guests prefer vegetarian options. You can use slice()
//  to create a separate array of vegetarian toppings to cater to their dietary preferences.

// 7. splice(): 🎣
// Cast your line and reel in some fishy fun with the splice() method! This versatile function 
// lets you add or remove elements from an array, giving you ultimate control over your data.

const fish = ['trout', 'salmon', 'bass', 'pike'];
const removedFish = fish.splice(2, 1, 'catfish', 'perch');
console.log(removedFish); // Output: ["bass"]
console.log(fish); // Output: ["trout", "salmon", "catfish", "perch", "pike"]
// Explanation:
// splice() adds or removes elements from an array and returns an array containing the removed elements.
//  In this example, we're removing one element at index 2 (bass) and adding two new elements (catfish and perch) in its place.

// Real-Life Use Case:
// Imagine you're organizing a fishing tournament, and you need to keep track of the types of fish 
// caught by each angler. You can use splice() to update the array of fish caught whenever a new catch is recorded.

// 8. join(): 🧩
// It's time to join forces and unite your array elements with the join() method! This 
// cooperative function transforms your array into a single string, ready to be shared with the world.

const ingredients = ['flour', 'sugar', 'eggs', 'butter'];
const recipe = ingredients.join(', ');
console.log(recipe); // Output: "flour, sugar, eggs, butter"

// Explanation:
// join() joins all elements of an array into a string, using a specified separator between each element. 
// It's like mixing all the ingredients together to create a delicious recipe!

// Real-Life Use Case:
// Imagine you're writing a shopping list for baking a cake, and you want to list all the ingredients in 
// a single line. You can use join() to convert your array of ingredients into a comma-separated string for easy reference at the store.

// 9. indexOf(): 🔍
// Embark on a quest for knowledge with the indexOf() method! This intrepid function searches 
// for a specified element in your array and returns its index – like a treasure map leading you to buried treasure!

const fruits = ['apple', 'banana', 'cherry', 'banana'];
const bananaIndex = fruits.indexOf('banana');
console.log(bananaIndex); // Output: 1
// Explanation:
// indexOf() returns the first index at which a given element can be found in the array, or 
// -1 if it is not present. It's like scanning through a fruit bowl to find the elusive banana hiding among the apples and cherries.

// Real-Life Use Case:
// Imagine you're sorting through a basket of fruit, looking for a specific type of apple. You can use indexOf() 
// to quickly locate the apple and determine its position in the basket.

// 10. lastIndexOf(): 🔍
// When one search isn't enough, turn to the lastIndexOf() method for a second chance at finding your elusive 
// element! This trusty function searches for a specified element in your array, starting from the end, and returns its last index.

const fruits = ['apple', 'banana', 'cherry', 'banana'];
const lastBananaIndex = fruits.lastIndexOf('banana');
console.log(lastBananaIndex); // Output: 3

// Explanation:
// lastIndexOf() returns the last index at which a given element can be found in the array,
//  or -1 if it is not present. It's like retracing your steps in search of that missing banana, starting from the back of the fruit bowl.

// Real-Life Use Case:
// Imagine you're hunting for your favorite pair of socks in a drawer filled with socks of various colors.
//  You can use lastIndexOf() to search for the last occurrence of your favorite color sock, helping you find it faster amidst the sea of socks.

// Stay tuned for Part 2, where we'll continue our journey through the fascinating world of JavaScript array methods! 
// We've only scratched the surface – there's so much more to explore. 🚀💻