
// Step 3. Create an array of objects
const gallery = [

{
    category: "massage",
    title: "Hot stone",
    subtitle: "Massage",
    image: "images/hotstone-massage.webp"
},

{
    category: "facial",
    title: "facial",
    subtitle: "trieatment",
    image: "images/facial-7.webp"
},
{
    
    category: "eyelash",
    title: "Classic Lash",
    subtitle: "Eyelash",
    image: "images/eyelash-5.webp"
},
{
    category: "massage",
    title: "deep tissue",
    subtitle: "Massage",
    image: "images/deep-tissue-5.webp"
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
    category: "waxing",
    title: "wax",
    subtitle: "face wax",
    image: "images/wax-5.jpg"
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
    
    category: "eyelash",
    title: "Classic Lash",
    subtitle: "Eyelash",
    image: "images/eyelash-9.png"
},

{
    category: "nails",
    title: "Gel Nails",
    subtitle: "Nails",
    image: "images/nails-2.webp"
},

{
    category: "waxing",
    title: "face Wax",
    subtitle: "Waxing",
    image: "images/wax-1.webp"
},

{
    category: "eyelash",
    title: "Classic Lash",
    subtitle: "Eyelash",
    image: "images/eyelash-87.webp"
},

{
    category: "nails",
    title: "coffin nails",
    subtitle: "Nails",
    image: "images/nails-3.webp"
},
{
    category: "massage",
    title: "swedish Massage",
    subtitle: "Swedish",
    image: "images/swidish-4.webp"
},
{
    category: "waxing",
    title: "leg Wax",
    subtitle: "Waxing",
    image: "images/wax-3.jpg"
},

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

            <figcaption class="flex">
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
