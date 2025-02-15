const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".navigation");

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Hero section animation
window.addEventListener('load', () => {
    document.querySelector('.hero').classList.add('loaded');
});