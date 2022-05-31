const form = document.querySelector('.login-form');
const emailEl = document.querySelector('input[type="emeil"]');
const passwordEl = document.querySelector('input[type="password"]');

form.addEventListener('submit', onFormSubmit);

let user = {email: '', password: ''};
function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    if (emailEl === '' || passwordEl === '') {
        return alert('All fields must be filled!');

    }else {
        user.email = emailEl;
        user.password = passwordEl.value;
    }
    document.querySelector('.login-form').reset();
    console.log(user)
}
