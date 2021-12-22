
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');
const form = document.querySelector('form');
const span = document.querySelectorAll('span');

form.addEventListener('submit', (e) => {    
    for(let x of span) {
        x.innerHTML = "";
    };
    if(firstName.value == ""){
        span[0].innerHTML = "please enter your first name";
        e.preventDefault();
    };
    if(lastName.value == ""){
        span[1].innerHTML = "please enter your last name";
        e.preventDefault();
    };
    if(email.value == "" || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        span[2].innerHTML = "invalid email";
        e.preventDefault();
    };
    if(textarea.value == ""){
        span[3].innerHTML = "please enter your message";
        e.preventDefault();
    };
});



