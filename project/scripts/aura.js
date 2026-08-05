// ========== Mobile Menu ==========
const menuBtn = document.querySelector("#menu");
const navigationLinks = document.querySelector(".navigation");

if (menuBtn && navigationLinks) {
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("open");
        navigationLinks.classList.toggle("open");
    });
}

// ========== Footer ==========
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}