        
// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.querySelector('______'); // Fill in the blank to reference the unordered list element.

// const li = document.createElement('li');

// const deleteButton = document.createElement('button');


// // textContent is preferred over innerHTML because it is more secure.
// // However, if you need to include HTML tags, use innerHTML.
// // textContent will not render HTML tags; it will display them as plain text.

// li.textContent = input.value;

// // Why is the value property used?
// // The input variable references an HTML input text field, 
// // and we need to access the user's entry. Here is the HTML that
// //  was provided: <input type="text" id="favchap" placeholder="Alma 5">


// // Set the delete button's textContent to ❌.
// deleteButton.textContent = '❌';

// // Append the delete button to the li element
// li.append(deleteButton);

// // Append the li element variable to the unordered list 
// // in your HTML.
// list.append(li);


// // Common DOM event concepts and use cases.
// // These are just a few examples; there are many other events and use cases.



// // Click Event: Triggered when a user clicks on an element. 
// // It's widely used for handling button clicks, link clicks, 
// // or any interaction involving a mouse click.
// buttonElement.addEventListener('click', function() {
//   // Code to execute when the element is clicked
// });
// // The addEventListener method takes two arguments:
// //  the event name and a function to execute when the event is triggered.
// //   This function is called an event handler. We will learn more about writing functions later
// //    in the course. For now, just know that the function is a block of code that will execute when
// //     the event is triggered. The function is also called a callback 
// //     function because it is "called back" when the event is triggered.


// // DOMContentLoaded Event: Triggered when the HTML document has been completely 
// // parsed and all deferred scripts have been executed. It's widely used 
// // for initializing JavaScript applications.
// document.addEventListener("DOMContentLoaded", function() {
//   // Code to execute when the DOM is parsed
// });


// button.addEventListener('click', function() {
//   // Code to execute when the button is clicked
// });

// // if (input.value.trim() !== '') { ... }

// deleteButton.addEventListener('click', function () {
//   list.removeChild(li);
//   input.focus();
// });

// input.value = '';

// input.focus();

// select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// wait for button clicks
buttonElement.addEventListener("click", function () {
	// Check if the user entered something
	if (inputElement.value != "") {
		// create list item and give it the value of the input
		const li = document.createElement("li");
		li.textContent = inputElement.value;
		// create a button and add a click event listener
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function () {
			listElement.removeChild(li);
			inputElement.focus();
		});
		// add the button to the list item
		li.appendChild(deleteBtn);
		// OUTPUT: finally display the completed list item to the unordered list
		listElement.appendChild(li);
		// clear the user input field
		inputElement.value = "";
	}
	// focus the user back to the input field
	inputElement.focus();
});

