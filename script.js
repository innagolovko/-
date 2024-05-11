const popupElement = document.querySelector(".popup");
const closePopup = popupElement.querySelector(".popup__close");
const backPopup = popupElement.querySelector(".popup__back");
const changeButtonPopup = popupElement.querySelector(".popup__button-change");
const changeButtonForm = document.querySelector(".form__button-change");
const inputPassword = document.querySelector(".form__input-container_ctrl_password");

 


const toggleOpenPopup = function () {
    popupElement.classList.add("popup__opened");
   

};
changeButtonPopup.addEventListener("click", toggleOpenPopup);
