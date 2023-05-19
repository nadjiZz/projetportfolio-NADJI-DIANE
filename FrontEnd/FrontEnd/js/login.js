
document.querySelector("#login").onclick = (e) => {
    e.preventDefault();
    console.log(login);
const $signInForm = document.querySelector('.form')
const $userEmailInput = document.querySelector('#user-email')
const $userEmailErrorMsg = document.querySelector('.email-error')
const $userPasswordInput = document.querySelector('#user-password')
const $userPasswordErrorMsg = document.querySelector('.password-error')
const USER_EMAIL = "sophie.bluel@test.tld"
const USER_PASSWORD = "S0phie"

const checkUserEmailInput = () => {
    const isUserEmailValid = $userEmailInput.value.toLowerCase() === USER_EMAIL
    if (isUserEmailValid) {
        $userEmailErrorMsg.classList.add('hidden')
    } else {
        $userEmailErrorMsg.classList.remove('hidden')
    }

    return isUserEmailValid
}

const checkUserPasswordInput = () => {
    const isUserPasswordValid = $userPasswordInput.value === USER_PASSWORD

    if (isUserPasswordValid) {
        $userPasswordErrorMsg.classList.add('hidden')
    } else {
        $userPasswordErrorMsg.classList.remove('hidden')
    }

    return isUserPasswordValid
}

const isFormValid = () => checkUserEmailInput() && checkUserPasswordInput()

$signInForm.addEventListener('submit', function(e) {
    e.preventDefault()
    if (isFormValid()) {
        window.location = 'http://192.168.29.24:5500/FrontEnd/index.html#'
    }
})
}