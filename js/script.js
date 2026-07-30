JavaScript

// Some Assembly Required
// script.js
// Version 1.0

document.addEventListener("DOMContentLoaded", () => {
    console.log("Some Assembly Required website loaded.");

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
});