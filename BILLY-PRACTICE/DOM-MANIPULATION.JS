
// Practice: Common DOM manipulation concepts and use cases.

// Select an HTML element from the document using the querySelector method.

const article = document.querySelector('article');

// Change the innerHTML property of an existing element.
// This line of code uses an existing variable that references a previously 
// selected element and changes its innerHTML property value.
article.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent property does not.';

// Change the inline CSS style of an element.
// This line of code changes the text-align CSS property of the selected element.
article.style.textAlign = 'right';

// Change an attribute of an element.
// This line of code adds a class attribute to the element and assigns it a value.
article.setAttribute('class', 'active');

// An alternative way to change an element's class attribute is by directly manipulating the element's classList property.

article.classList.add('active');

// This method is often preferred for class manipulation because classList provides additional methods like add, remove, toggle, and contains, making it more convenient and expressive for managing classes.
// Create an element.
// This line of code creates a new <p> element and stores it in the variable named paragraph.

const paragraph = document.createElement('p');

// Append content or elements to an element.
// These lines of code add content to the end of the article element.
article.appendChild(paragraph);
article.append(paragraph, 'Hello World Addition!');

// The append() method allows you to include multiple arguments to append to the element in the specified order.

// Remove an element from the document.
// These lines of code remove the paragraph from the article and then remove the article itself.
article.removeChild(paragraph);
article.remove();

// Activity Instructions
// Example screen shot of Book of Mormon chapter application
// This Book of Mormon application will be expanded upon in future learning activities. We will start by building the interface and implementing basic DOM manipulation.

// This app allows users to enter their favorite Book of Mormon chapters and display them in a list that updates automatically on the screen. Entries can then be deleted from the list.

// Create an HTML file named "bom.html" in the week02 folder.
// Your bom.html HTML document should include the basic meta tags and an appropriate title