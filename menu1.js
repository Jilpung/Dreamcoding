// const toggleBtn = document.querySelector('.header__toggleBtn');
// const menu = document.querySelector('header__menu');
// const icons = document.querySelector('.header__icons');

// toggleBtn.addeventlistener('click', () => {
//     menu.classList.toggle('active');
//     icons.classList.toggle('active');
// });
const toggleBtn = document.querySelector('.header__toggleBtn');
    const menu = document.querySelector('.header__menu');
    const icons = document.querySelector('.header__icons');
    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });