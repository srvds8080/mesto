const validationObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-btn',
    inactiveButtonClass: 'popup__form-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__form-error_visible'
}

class FormValidator {
    constructor(formElement, {inputSelector, errorClass, inputErrorClass, inactiveButtonClass, submitButtonSelector}) {
        this.formElement = formElement;
        this.inputSelector = inputSelector;
        this.errorClass = errorClass;
        this.inputErrorClass = inputErrorClass;
        this.inactiveButtonClass = inactiveButtonClass;
        this.submitButtonSelector = submitButtonSelector;
    }

    _setEventListener() {
        const inputs = Array.from(this.formElement.querySelectorAll(this.inputSelector));
        const buttonSubmit = this.formElement.querySelector(this.submitButtonSelector);
        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._validError(this.formElement, input);
                this._validButtons(inputs, buttonSubmit);
            });
        });
    }

    _validError(form, input) {
        const errorElement = form.querySelector(`#${input.name}-error`);
        if (input.validity.valid) {
            this._validInputs(input, errorElement);
        } else {
            this._unValidInputs(input, errorElement);
        }
    }

    _validInputs(input, errorElement) {
        input.classList.remove(this.errorClass);
        input.classList.remove(this.inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this.errorClass);
    }

    _unValidInputs(input, errorElement) {
        input.classList.add(this.errorClass);
        input.classList.add(this.inputErrorClass);
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this.errorClass);
    }

    _checkedInput(inputs) {
        return inputs.some((inputItem) => !inputItem.validity.valid);
    }

    _validButtons(inputs, button) {
        const isFormValid = this._checkedInput(inputs);
        if (isFormValid) {
            button.classList.add(this.inactiveButtonClass);
            button.disabled = true;
        } else {
            button.classList.remove(this.inactiveButtonClass);
            button.disabled = false;
        }
    }

    enableValidation() {
        this._setEventListener()
    }
}

const enableValidation = ({formSelector, ...rest}) => {
    const formElement = Array.from(document.querySelectorAll(formSelector));
    formElement.forEach((itemForm) => {
        itemForm.addEventListener('submit', (evt) => evt.preventDefault());
        const validObject =  new FormValidator(itemForm, rest);
        validObject.enableValidation();
    });
}
enableValidation(validationObject);
