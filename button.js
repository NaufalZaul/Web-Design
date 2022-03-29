const burger = document.querySelector('.navbar-burger');
const menu = document.querySelector('.navbar-menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('is-active');
})