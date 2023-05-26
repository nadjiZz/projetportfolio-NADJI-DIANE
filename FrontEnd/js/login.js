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
            $userEmailErrorMsg.classList.remove('tex-email')
            $userEmailErrorMsg.classList.add('hiden')
        } else {
            $userEmailErrorMsg.classList.remove('hiden')
        }
        return isUserEmailValid
    }
    const checkUserPasswordInput = () => {
            const isUserPasswordValid = $userPasswordInput.value === USER_PASSWORD
        
            if (isUserPasswordValid) {
                $userPasswordErrorMsg.classList.add('hiden')
            } else {
                $userPasswordErrorMsg.classList.remove('hiden')
            }
        
            return isUserPasswordValid
        }
        const isFormValid = () => checkUserEmailInput() && checkUserPasswordInput()
        $signInForm.addEventListener('submit', function(e) {
                e.preventDefault()
                if (isFormValid()) {
                    window.location = 'http://127.0.0.1:5500/Frontend/index.html'
                }
            })