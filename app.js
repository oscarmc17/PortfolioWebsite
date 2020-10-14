const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const navItems = document.querySelector('.nav-list');

function hamMenu() {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle("change");
    })
    navItems.addEventListener('click', () => {
        navbar.classList.remove("change");
    })
};

hamMenu();