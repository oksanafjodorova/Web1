const hamburger = document.querySelector ('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list u1');
const header = document.queryselector('.header.container');

hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     mobile_menu.classList.toggle('active');
});