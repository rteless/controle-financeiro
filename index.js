function onChangeEmail(){
   toggleButtonsDisable();
   toggleEmailErrors();
  }

  function onChangePassword(){
    togglePasswordErrors();
    toggleButtonsDisable();
  }

function isEmailValid(){
    const email = form.email().value;
    if(!email){
        return false;
    }
    return validateEmail(email); 
}


function toggleEmailErrors(){
    const email = form.email().value;
    if(!email){
        document.getElementById('email-required-error').style.disabled ="block";
    }else{
        document.getElementById('email-required-error').style.disabled ="none";
    }

    if(validateEmail(email)){
        document.getElementById('email-invalid-error').style.display="none";
    } else{
        document.getElementById('email-invalid-error').style.display="block";
    }
}

function togglePasswordErrors() {
    const password = form.password().value;
    if (!password) {
        document.getElementById('password-required-errer').style.display="block";
    } else {
        document.getElementById('password-required-errer').style.display='none';
    }
}

function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled= !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled= !emailValid || !passwordValid;
}

function isPasswordValid(){
    const password = document.getElementById('password').value;
    if (!password){
        return false;
    }
    return true;
}
//função de expressões regulares         
function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById('password'),
    passwordRequirederror: () => document.getElementById('password-required=error'),
    recoverPassword: () => document.getElementById('recover-password-button')
}