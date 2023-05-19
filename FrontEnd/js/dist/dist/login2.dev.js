"use strict";

var $signInForm = document.querySelector('.form');
var $userEmailInput = document.querySelector('#email');
var $userEmailErrorMsg = document.querySelector('.email-error');
var $userPasswordInput = document.querySelector('#password');
var $userPasswordErrorMsg = document.querySelector('.password-error');
var USER_EMAIL = "sophie.bluel@test.tld";
var USER_PASSWORD = "S0phie";

var checkUserEmailInput = function checkUserEmailInput() {
  var isUserEmailValid = $userEmailInput.value.toLowerCase() === USER_EMAIL;

  if (isUserEmailValid) {
    $userEmailErrorMsg.classList.add('hidden');
  } else {
    $userEmailErrorMsg.classList.remove('hidden');
  }

  return isUserEmailValid;
};

var checkUserPasswordInput = function checkUserPasswordInput() {
  var isUserPasswordValid = $userPasswordInput.value === USER_PASSWORD;

  if (isUserPasswordValid) {
    $userPasswordErrorMsg.classList.add('hidden');
  } else {
    $userPasswordErrorMsg.classList.remove('hidden');
  }

  return isUserPasswordValid;
};

var isFormValid = function isFormValid() {
  return checkUserEmailInput() && checkUserPasswordInput();
};

$signInForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (isFormValid()) {
    window.location = 'http://192.168.29.24:5500/FrontEnd/index.html';
  }
});