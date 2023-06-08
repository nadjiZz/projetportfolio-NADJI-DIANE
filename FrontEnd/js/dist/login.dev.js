"use strict";

var formulaireUser = document.querySelector(".login-form");
formulaireUser.addEventListener("submit", function (event) {
  event.preventDefault(); // Declaration des valeurs concernant l'utilisateur

  var emailUser = "sophie.bluel@test.tld";
  var passwordUser = "S0phie"; // Declaration de la balise contenant le mot d'erreur caché

  var inputErrorEmail = document.querySelector('.user-email-error-msg');
  var inputErrorPassword = document.querySelector('.user-password-error-msg'); // Declaration des entrées à valeurs unique

  var email = event.target.querySelector("[name=email]").value;
  var password = event.target.querySelector("[name=password]").value; // Definition des données de l'utilisateur à l'entrée

  var user = {
    email: event.target.querySelector("[name=email]").value,
    password: event.target.querySelector("[name=password]").value
  };
  var stringUser = JSON.stringify(user); // Enregistrement des données de l'utilisateur

  window.localStorage.setItem("user", stringUser); // Stockage du token
  // Des données de l'utilisateur pour la verification

  var userId = {
    email: "sophie.bluel@test.tld",
    password: "S0phie"
  };
  var stringUserId = JSON.stringify(userId); // Création de la charge utile au format JSON

  var chargeUtile = JSON.stringify(user); // Appel de la fonction fetch avec toutes les informations nécessaires

  fetch("http://localhost:5678/api/users/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: chargeUtile
  }).then(function (res) {
    if (stringUser === stringUserId) {
      window.location = "../FrontEnd/index.html";
    } else if (email !== emailUser) {
      inputErrorEmail.style.display = "block";
    } else if (password !== passwordUser) {
      inputErrorPassword.style.display = "block";
    } else if (password == null) {
      alert("Veuillez entree l'email ou le passwor");
    } else {
      alert("Veuillez entrez les mots identifiants");
    }

    return res.json();
  }).then(function (donnee) {
    return window.localStorage.setItem('token', donnee.token);
  });
});