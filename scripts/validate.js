import {FormValidator} from './FormValidator.js';

const validationObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-btn',
    inactiveButtonClass: 'popup__form-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__form-error_visible'
}

const enableValidation = ({formSelector, ...rest}) => {
    const formElement = Array.from(document.querySelectorAll(formSelector));
    formElement.forEach((itemForm) => {
        itemForm.addEventListener('submit', (evt) => evt.preventDefault());
    });
    new FormValidator(formElement, rest).enableValidation();
}
enableValidation(validationObject);