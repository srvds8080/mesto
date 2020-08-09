const validationObject = {
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__form-btn',
        inactiveButtonClass: 'popup__form-btn_disabled',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__form-error_visible'
    }
    //функция валидности инпутов
function validInputs(input, errorElement, errorClass, inputErrorClass) {
    input.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
}
//функция невалидности инпутов
function unValidInputs(input, errorElement, errorClass, inputErrorClass) {
    input.classList.add(errorClass);
    input.classList.add(inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(errorClass);
}



function checkedInput(input) {
    return input.some((inputItem) => !inputItem.validity.valid);
}

//функция валидации кнопки
function validButtons(input, buttons, classButton) {
    const isFormValid = checkedInput(input);
    if (isFormValid) {
        buttons.some((button) => {
            button.classList.add(classButton);
            button.disabled = true;
        });
    } else {
        buttons.some((button) => {
            button.classList.remove(classButton);
            button.disabled = false;
        });
    }
}

//функция валидации сообщений с ошибками и инпутов 
function validError(form, input, errorClass, inputErrorClass) {
    const errorElement = form.querySelector(`#${input.name}-error`);
    if (input.validity.valid) {
        //функция валидности инпутов
        validInputs(input, errorElement, errorClass, inputErrorClass);
    } else {
        //функция невалидности инпутов
        unValidInputs(input, errorElement, errorClass, inputErrorClass);
    };
};

function setEventListener(listenerItem, listenerParent) {
    return Array.from(listenerParent.querySelectorAll(listenerItem))
}
const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        const inputs = setEventListener(inputSelector, formElement);
        const buttonSubmit = setEventListener(submitButtonSelector, formElement);
        inputs.forEach((inputElement) => {
            validError(formElement, inputElement, errorClass, inputErrorClass);
            validButtons(inputs, buttonSubmit, inactiveButtonClass);

            inputElement.addEventListener('input', () => {
                validError(formElement, inputElement, errorClass, inputErrorClass);
                validButtons(inputs, buttonSubmit, inactiveButtonClass);
            });
        });
    });
};

enableValidation(validationObject);