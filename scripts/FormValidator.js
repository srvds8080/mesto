class FormValidator {
    constructor(formElement, {inputSelector, errorClass, inputErrorClass, inactiveButtonClass, submitButtonSelector}) {
        this._formElement = formElement;
        this._inputSelector = inputSelector;
        this._errorClass = errorClass;
        this._inputErrorClass = inputErrorClass;
        this._inactiveButtonClass = inactiveButtonClass;
        this._submitButtonSelector = submitButtonSelector;
    }

    enableValidation() {
        this._setEventListener()
    }

    resetForm(form) {
        this._errorReset(form);
        this._resetInput(form);
        this._validButton(form)
    }
    _validButton(form){
        const button = form.querySelector(`${this._submitButtonSelector}`);
        const inputs = Array.from(form.querySelectorAll(this._inputSelector));
        const isFormValid = this._checkedInput(inputs);
        if (isFormValid) {
            button.classList.add(this._inactiveButtonClass);
            button.disabled = true;
        } else {
            button.classList.remove(this._inactiveButtonClass);
            button.disabled = false;
        }
    }
    _setEventListener() {
        this._formElement.forEach((itemForm) => {
            const inputs = Array.from(itemForm.querySelectorAll(this._inputSelector));
            inputs.forEach((input) => {
                input.addEventListener('input', () => {
                    this._validError(itemForm, input);
                    this._validButton(itemForm);
                });
            });
        });
    }

    _errorReset(form) {
        const textError = Array.from(form.querySelectorAll(`.${this._errorClass}`))
        textError.forEach((errorElement) => {
            errorElement.textContent = '';
            errorElement.classList.remove(`.${this._errorClass}`);
        })
    }

    _resetInput(form) {
        const inputReset = Array.from(form.querySelectorAll(this._inputSelector))
        inputReset.forEach((inputResetElement) => {
            inputResetElement.classList.remove(this._inputErrorClass);
        })
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
        input.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    }

    _unValidInputs(input, errorElement) {
        input.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this._errorClass);
    }

    _checkedInput(inputs) {
        return inputs.some((inputItem) => !inputItem.validity.valid);
    }
}

export {FormValidator};
