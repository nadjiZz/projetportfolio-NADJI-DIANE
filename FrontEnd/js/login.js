

const formulaireUser = document.querySelector(".formulaireLogin");
formulaireUser.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailUser = "sophie.bluel@test.tld";
    const passwordUser = "S0phie";
    const inputErrorEmail = document.querySelector('.user-email-error-msg');
    const inputErrorPassword = document.querySelector('.user-password-error-msg');
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


// document.formLogin.addEventListener('submit', async function (e) {
//     e.preventDefault();
    
//     const user = {
//         email: this.email.value,
//         password: this.password.value
//     };

    // console.log("email",this.email.value)
    // console.log("password",this.password.value)
//     if(this.email.value == "" || this.password.value == ""){
//         alert("un des champs est vide")
//     }else{

  

//     const res = await fetch('http://localhost:5678/api/users/login', {
//         method: "post",
//         headers: {
//             "Content-type": "application/json",
//         },
//         body: JSON.stringify(user),
//     });

//     const data = await res.json();

//     sessionStorage.setItem('userId',data.userId);
//     sessionStorage.setItem('token', data.token);
//     if (data.token) {
//        document.location.href="./index.html";
//     } else {
//         alert("Le mot de passe ou/et l'identifiant n'est pas corrects");
//     }
// }    
// });

