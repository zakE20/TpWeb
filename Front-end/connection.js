document.addEventListener("DOMContentLoaded", function () {
    const loginBox = document.querySelector(".login-box");
    const registerBox = document.querySelector(".register-box");
    const showLogin = document.getElementById("showLogin");
    const showRegister = document.getElementById("showRegister");

    function activateTab(activeElement, inactiveElement) {
        activeElement.style.color = "white";
        inactiveElement.style.color = "black";
    }

    showLogin.addEventListener("click", function () {
        loginBox.classList.add("active");
        registerBox.classList.remove("active");
        activateTab(showLogin, showRegister);
    });

    showRegister.addEventListener("click", function () {
        registerBox.classList.add("active");
        loginBox.classList.remove("active");
        activateTab(showRegister, showLogin);
    });

    activateTab(showLogin, showRegister);

    const loginForm = document.getElementById('login-form');
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    const loginError = document.getElementById('login-error');

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        loginError.textContent = '';

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === loginEmail.value);

        if (!loginEmail.value || !loginPassword.value) {
            loginError.textContent = "Veuillez remplir tous les champs.";
        } else if (!user || user.password !== loginPassword.value) {
            loginError.textContent = "Email ou mot de passe incorrect.";
        } else {
            // Stocker l'utilisateur connecté
            localStorage.setItem('loggedInUser', JSON.stringify(user));

            // Redirection vers la page d'accueil
            window.location.href = "index.html";
        }
    });

    // Gestion de l'inscription
    const registerForm = document.getElementById('register-form');
    const registerEmail = document.getElementById('register-email');
    const registerPassword = document.getElementById('register-password');
    const registerError = document.getElementById('register-error');

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        registerError.textContent = '';

        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (!registerEmail.value || !registerPassword.value) {
            registerError.textContent = "Veuillez remplir tous les champs.";
        } else if (!validateEmail(registerEmail.value)) {
            registerError.textContent = "Veuillez entrer un email valide.";
        } else if (users.some(u => u.email === registerEmail.value)) {
            registerError.textContent = "Cet email est déjà utilisé.";
        } else {
            const newUser = {
                email: registerEmail.value,
                password: registerPassword.value,
                name: registerEmail.value.split('@')[0] // Prendre le début de l'email comme nom
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
            registerForm.reset();
            showLogin.click();
        }
    });

    // Fonction pour valider un email
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }
});
