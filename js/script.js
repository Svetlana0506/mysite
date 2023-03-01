let AboutButton = document.querySelector('.about-button');
let loginPopUp = document.querySelector('.login-popup');
let ButtonClosse = document.querySelector('.close-button')

 
function showpopup() {
    loginPopUp.classList.add('show-popup');
};


function clossepopup() {
    loginPopUp.classList.remove('show-popup');
};

AboutButton.addEventListener('click',showpopup)

ButtonClosse.addEventListener('click',clossepopup)