"use strict";

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