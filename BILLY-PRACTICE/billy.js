const imageGallery = [
    {
        url: "images/congo-small.webp",
    },
    {
        url: "images/paris-temple.jpeg",
    },
    {
        url: "images/rome-temple.jpeg",
    },
    {
        url: "images/tokyo-temple.jpeg",
    },
];

const gallery = document.querySelector(".gallery");

const displayGallery = (images) => {
    gallery.innerHTML = "";

    images.forEach((image) => {
        gallery.innerHTML += `
            <img
                src="${image.url}"
                alt="Gallery image"
                width="400"
                height="400"
                loading="lazy"
            >
        `;
    });
};

displayGallery(imageGallery);