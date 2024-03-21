const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addeventlistener('submit', e =>{
    e.preventdefault();

    validateinputs();
});

const setError =(element, message) => 
{
    const inputcontrol = element.parentElement;
    const errordisplay = inputcontrol.queryselector('.error');

    errordisplay.innertext = message;
    inputcontrol.classlist.add('error');
    inputcontrol.classlist.remove('success')

}
const setsuccess = element =>{
    const inputcontrol = element.parentelement;
    const errordisplay = inputcontrol.queryselector('.erro');

    errordisplay.innertext = '';
    inputcontorl.classlist.add('success');
    inputcontorl.classlist.remove('error');
};

const isvalidemail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(string(email).tolowercase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

