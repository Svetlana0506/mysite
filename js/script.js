let AboutButton = document.querySelector('.about-button');
let loginPopUp = document.querySelector('.login-popup');

AboutButton.addEventListener('click',showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');
};