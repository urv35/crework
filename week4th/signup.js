const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpass = document.getElementById('cpass');

//event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    //getting values
    const nameValue = name.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const cpassValue = cpass.value;
   }

    //function for error
    function setErrorFor(input, message) {
        const field = input.parentElement;
        const small = field.querySelector('small');
        field.className = 'field error';
        small.innerText = message;
    }

    //function for success
    function setSuccessFor(input) {
        const field = input.parentElement;
        field.className = 'field success';
    }


    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be blank');
    } else {
        setSuccessFor(name);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    }
    else if (password.length < 4) {
        setErrorFor(password, 'Password is too short');
    }
    else if (password.length > 12) {
        setErrorFor(password, 'Password must be shorter than 12 characters');
    }
    else {
        setSuccessFor(password);
    }

    if (cpassValue === '') {
        setErrorFor(cpass, 'Password cannot be blank');
    } else if (passwordValue !== cpassValue) {
        setErrorFor(cpass, 'Passwords does not match');
    } else {
        setSuccessFor(cpass);
    }
}



function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
