// ==========menu===========
const menuBtn = document.querySelector("#menu");
const navigationLinks = document.querySelector(".navigation");

if (menuBtn && navigationLinks) {
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("open");
        navigationLinks.classList.toggle("open");
    });
}


const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

lastModified.textContent = document.lastModified;
