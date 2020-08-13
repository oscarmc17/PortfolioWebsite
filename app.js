const hamburger = document.querySelector(".hamburger");
const hamburgerLinks = document.querySelector(".hamburger-links");
const links = document.querySelectorAll(".hamburger-links li");

hamburger.addEventListener("click", () => {
    hamburgerLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    
    });
    //Burger Animation
    hamburger.classList.toggle("toggle");
});