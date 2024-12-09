
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
AOS.init({
    duration: 1000,
    easing: 'ease-in-out', 
    once: true 
});

