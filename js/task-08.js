const form = document.querySelector('.login-form');
const email = document.querySelector('input[type="emeil"]');
const password = document.querySelector('input[type="password"]');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert('All fields must be filled!');

    }
    event.currentTarget.reset();
    }
    
// let user = {email: '', password: ''};
// function onFormSubmit(event) {
//     event.preventDefault();

//     const {
//         elements: { email, password }
//     } = event.currentTarget;
//     const formData = new FormData(event.currentTarget);
//     console.log(formData);

//     if (emailEl === '' || passwordEl === '') {
//         return alert('All fields must be filled!');

//     }else {
//         user.email = emailEl;
//         user.password = passwordEl.value;
//     }
//     document.querySelector('.login-form').reset();
//     console.log(user);
    
// }
