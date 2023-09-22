const menuPanel = document.querySelector('.menu__wrapper');
const navMenu = document.querySelector('.nav-menu__menu');
const menuClose = document.querySelector('.menu-close');

function toggleMenu(){
    menuPanel.classList.toggle('menu-hidden');
}

navMenu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);