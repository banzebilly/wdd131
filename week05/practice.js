localStorage.setItem("username", "John");


// Retrieve data
const username = localStorage.getItem("username");
console.log(username); // John

// Update data
localStorage.setItem("username", "Jane");

// Remove a specific item
localStorage.removeItem("username");


// Clear all local storage
localStorage.clear();

// Storing Objects

// Since localStorage only stores strings, convert objects to JSON.

// Save an object
const user = {
  name: "John",
  age: 30
};

localStorage.setItem("user", JSON.stringify(user));                                                                                                                                                                                                                                                                                                                          ''