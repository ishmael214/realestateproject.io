// Login / Register

const loginPage = document.querySelector('header .active');
const showLoginPage = document.querySelector('.login-container');
const closeLoginPage = document.querySelector('#btn-close');

loginPage.addEventListener('click', () => {
    showLoginPage.style.clipPath = `circle(100% at 50% 50%)`;
})

closeLoginPage.addEventListener('click', () => {
    showLoginPage.style.clipPath = `circle(0 at 50% 50%)`;
})

const loginToggle = document.querySelectorAll('.next-log');
const regPage = document.querySelector('#res');


loginToggle.forEach(item => {
    item.addEventListener('click', () => {
        regPage.classList.toggle('hidden');
    })
})