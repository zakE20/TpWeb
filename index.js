const navtoogle  = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.main-nav');

console.log(navtoogle);
console.log(sidebar);

navtoogle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-btn"); 
    const navBar = document.querySelector(".main-nav");
    const userInfo = document.getElementById("user-info"); 
    const pseudoElement = document.getElementById("user-pseudo"); 

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        loginButton.textContent = "se déconneter";
        loginButton.href = "#";

        userInfo.textContent = `Bonjour, ${loggedInUser.email}`;
        userInfo.style.display = "inline"; 

        

        

        loginButton.addEventListener("click", function (event) {
            event.preventDefault();

            localStorage.removeItem("loggedInUser");

            window.location.reload();
        });

    } else {

        loginButton.textContent = "Se connecter";
        loginButton.href = "connection.html";

        userInfo.textContent = "";
        userInfo.style.display = "none";

        welcomeMessage.style.display = "none";
    }
});







