const navtoogle  = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.main-nav');

console.log(navtoogle);
console.log(sidebar);

navtoogle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});