"use strict";

// document.querySelector(".login").onclick = (e) => {
//     e.preventDefault();
//     console.log(login);
// const $signInForm = document.querySelector('.form')
// const $userEmailInput = document.querySelector('#user-email')
// const $userEmailErrorMsg = document.querySelector('.email-error')
// const $userPasswordInput = document.querySelector('#user-password')
// const $userPasswordErrorMsg = document.querySelector('.password-error')
// const USER_EMAIL = "sophie.bluel@test.tld"
// const USER_PASSWORD = "S0phie"
// const checkUserEmailInput = () => {
//     const isUserEmailValid = $userEmailInput.value.toLowerCase() === USER_EMAIL
//     if (isUserEmailValid) {
//         $userEmailErrorMsg.classList.add('hidden')
//     } else {
//         $userEmailErrorMsg.classList.remove('hidden')
//     }
//     return isUserEmailValid
// }
// const checkUserPasswordInput = () => {
//     const isUserPasswordValid = $userPasswordInput.value === USER_PASSWORD
//     if (isUserPasswordValid) {
//         $userPasswordErrorMsg.classList.add('hidden')
//     } else {
//         $userPasswordErrorMsg.classList.remove('hidden')
//     }
//     return isUserPasswordValid
// }
// const isFormValid = () => checkUserEmailInput() && checkUserPasswordInput()
// $signInForm.addEventListener('submit', function(e) {
//     e.preventDefault()
//     if (isFormValid()) {
//         window.location = '../index.html'
//     }
// })
// }
var $signInForm = document.querySelector('.form');
var $userEmailInput = document.querySelector('#user-email');
var $userEmailErrorMsg = document.querySelector('.email-error');
var $userPasswordInput = document.querySelector('#user-password');
var $userPasswordErrorMsg = document.querySelector('.password-error');
var USER_EMAIL = "sophie.bluel@test.tld";
var USER_PASSWORD = "S0phie";

var checkUserEmailInput = function checkUserEmailInput() {
  var isUserEmailValid = $userEmailInput.value.toLowerCase() === USER_EMAIL;

  if (isUserEmailValid) {
    $userEmailErrorMsg.classList.remove('tex-email');
    $userEmailErrorMsg.classList.add('hiden');
  } else {
    $userEmailErrorMsg.classList.remove('hiden');
  }

  return isUserEmailValid;
};

var checkUserPasswordInput = function checkUserPasswordInput() {
  var isUserPasswordValid = $userPasswordInput.value === USER_PASSWORD;

  if (isUserPasswordValid) {
    $userPasswordErrorMsg.classList.remove('tex-passwor');
    $userPasswordErrorMsg.classList.add('hiden');
  } else {
    $userPasswordErrorMsg.classList.remove('hiden');
  }

  return isUserPasswordValid;
};

var isFormValid = function isFormValid() {
  return checkUserEmailInput() && checkUserPasswordInput();
};

$signInForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (isFormValid()) {
    window.location = 'http://127.0.0.1:5500/Frontend/index.html';
  }
});