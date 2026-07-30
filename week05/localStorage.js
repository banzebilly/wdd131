// To store non-string data in localStorage, use JSON.stringify() to convert the data to 
// a string before storing, then use JSON.parse() to convert it back when retrieving. This 
// approach allows you to store and retrieve complex data structures like objects and arrays.


// What are some of the differences between session and local storage?
// One main difference is that localStorage data persists even when the browser session 
// expires, while session variables do not.

// Using the Storage interface, what are some methods built into this interface object and what do they do?
// The most common Storage interface methods are getItem() and setItem(), which you will use in the assignments. Other available methods include key(), removeItem(), and clear().
// Storage Interface of the Web Storage API


// The directed plan is to create an array of valid book and chapter 
// entries made by the user. Store that array in localStorage as a JSON string using JSON.stringify().
//  Upon application load, retrieve and parse the array from localStorage using JSON.parse(), if the named
//   localStorage item exists. Then populate the list with the stored values.

// Rather than creating two functions that perform essentially the same task, you will create
//  a single function that both appends the favorite chapter list with
//   a delete button on initial load and when a new entry is added.



// made; whereas for local storage the call is made to Window.localStorage.

// In this article
// Instance properties
// Instance methods
// Examples
// Specifications
// Browser compatibility
// See also
// Paragon
// Give your AI agent hundreds of tools
// Skip the auth and infra. Give your agent hundreds of real integration actions, free to try.
// Sign up free
// Ad
Instance properties
// Storage.length Read only
// Returns an integer representing the number of data items stored in the Storage object.

// Instance methods
Storage.key()
// When passed a number n, this method will return the name of the nth key in the storage.

Storage.getItem()
// When passed a key name, will return that key's value.

Storage.setItem()
// When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.

Storage.removeItem()
// When passed a key name, will remove that key from the storage.

Storage.clear()
// When invoked, will empty all keys out of the storage.

// Examples
// Here we access a Storage object by calling localStorage. We first test whether the local storage contains data items using !localStorage.getItem('bgcolor'). If it does, we run a function called setStyles() that grabs the data items using Storage.getItem() and uses those values to update page styles. If it doesn't, we run another function, populateStorage(), which uses Storage.setItem() to set the item values, then runs setStyles().

// js

// Copy
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}

function setStyles() {
  const currentColor = localStorage.getItem("bgcolor");
  const currentFont = localStorage.getItem("font");
  const currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = `#${currentColor}`;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
// Note: To see this running as a complete working example, see our Web Storage Demo.

