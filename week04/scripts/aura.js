// ==========menu===========
const menuBtn = document.querySelector("#menu");
const navigationLinks = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navigationLinks.classList.toggle("open");

})


// Step 3. Create an array of objects
const gallery = [

{
    category: "massage",
    title: "Hot stone",
    subtitle: "Massage",
    image: "images/hotstone-5.webp"
},

{
    category: "facial",
    title: "facial",
    subtitle: "trieatment",
    image: "images/facial-7.webp"
},
{
    category: "massage",
    title: "deep tissue",
    subtitle: "Massage",
    image: "images/deep-tissue-2.webp"
},

{
    category: "facial",
    title: "facial",
    subtitle: "Massage",
    image: "images/facial-1.webp"
},

{
    category: "facial",
    title: "Glow Facial",
    subtitle: "Facial",
    image: "images/facial-4.jpg"
},

{
    category: "facial",
    title: "Luxury Facial",
    subtitle: "Facial",
    image: "images/facial-2.jpg"
},

{
    category: "nails",
    title: "French Nails",
    subtitle: "Nails",
    image: "images/nails-1.webp"
},

{
    category: "nails",
    title: "Gel Nails",
    subtitle: "Nails",
    image: "images/nails-2.webp"
},

{
    category: "waxing",
    title: "Leg Wax",
    subtitle: "Waxing",
    image: "images/wax-1.webp"
},

{
    category: "eyelash",
    title: "Classic Lash",
    subtitle: "Eyelash",
    image: "images/eyelash-87.webp"
}

];




// Step 4. Create a function that displays them
const galleryContainer = document.querySelector(".grid-gallery");

function displayGallery(items){

    galleryContainer.innerHTML = "";

    items.forEach(item => {

        galleryContainer.innerHTML += `

        <figure class="gallery-img">

            <img
                src="${item.image}"
                alt="${item.title}"
                loading="lazy"
                width="800"
                height="800">

            <figcaption>
                <p>${item.title}</p>
                <p>${item.subtitle}</p>
            </figcaption>

        </figure>

        `;

    });

}
displayGallery(gallery);


const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        if(category === "all"){

            displayGallery(gallery);

        }else{

            const filtered = gallery.filter(item => item.category === category);

            displayGallery(filtered);

        }

    });

});


// Step 7. Make "All" random every time

// If you want the All button to display every image but in a 
// different order each time, create a shuffle function.
// function shuffle(array){

//     return [...array].sort(() => Math.random() - 0.5);

// }

// displayGallery(shuffle(gallery));



// What you'll learn from this project

// By building this gallery, you'll practice several core JavaScript concepts:

// Arrays: storing many gallery items in one variable.
// Objects: each image has properties like category, title, and image.
// Functions: displayGallery() and shuffle().
// DOM manipulation: creating HTML dynamically with JavaScript.
// Event listeners: responding to button clicks.
// Array methods:
// forEach() to display every item.
// filter() to select only one category.
// sort() (with Math.random()) to shuffle the order.

// This approach is much cleaner than writing dozens
//  of <figure> elements by hand. If you eventually have 100+ 
//  images, you'll only need to add another object to the gallery 
//  array—your HTML and filtering logic won't need to change.