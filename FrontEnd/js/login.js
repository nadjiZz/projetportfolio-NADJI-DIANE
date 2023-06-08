

const formulaireUser = document.querySelector(".login-form");
formulaireUser.addEventListener("submit", function (event) {
    event.preventDefault();
    // Declaration des valeurs concernant l'utilisateur
    const emailUser = "sophie.bluel@test.tld";
    const passwordUser = "S0phie";
    // Declaration de la balise contenant le mot d'erreur caché
    const inputErrorEmail = document.querySelector('.user-email-error-msg');
    const inputErrorPassword = document.querySelector('.user-password-error-msg');


    // Declaration des entrées à valeurs unique
    const email = event.target.querySelector("[name=email]").value;
    const password = event.target.querySelector("[name=password]").value;
    // Definition des données de l'utilisateur à l'entrée
    const user = {
        email: event.target.querySelector("[name=email]").value,
        password: event.target.querySelector("[name=password]").value,
    };
    const stringUser = JSON.stringify(user);
    // Enregistrement des données de l'utilisateur
    window.localStorage.setItem("user", stringUser);
    // Stockage du token

    // Des données de l'utilisateur pour la verification
    const userId = {
        email: "sophie.bluel@test.tld",
        password: "S0phie"
    }
    const stringUserId = JSON.stringify(userId);
    // Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(user);
    // Appel de la fonction fetch avec toutes les informations nécessaires
    fetch("http://localhost:5678/api/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
    }).then((res)=>{
        if (stringUser === stringUserId) {
            window.location = "../FrontEnd/index.html";
        }
        else if (email !== emailUser) {
            inputErrorEmail.style.display = "block";
        }
        else if (password !== passwordUser) {
            inputErrorPassword.style.display = "block";
        }
        else if (password == null) {
            alert("Veuillez entree l'email ou le passwor");
        }
        else {
            alert("Veuillez entrez les mots identifiants");
        }
        return res.json()
    } ).then((donnee) => window.localStorage.setItem('token', donnee.token));
    
});

