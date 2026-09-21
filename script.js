// Mobile navigation

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close mobile menu when a link is clicked

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// Automatically update footer year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Scroll reveal animation

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.12
    }
);


// Add reveal effect to major sections

document
    .querySelectorAll(
        ".section-heading, .skill-card, .project-card, .stat, .cloud-content, .contact-links a"
    )
    .forEach(element => {

        element.classList.add("reveal");
        observer.observe(element);

    });