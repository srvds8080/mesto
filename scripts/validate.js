//TODO
//Добавить спаны для ошибок!
//найти все формы!
//повесить дефолт на все формы!
//в формах найти поля и кнопки
//повесить на поля и кнопки слушатели
//добавить функции
//
//
//

const validationObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-btn',
    inactiveButtonClass: 'popup__form-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__form-error_visible'
}

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const inputs = Array.from(formElement.querySelectorAll(inputSelector));
        const buttonSubmit = Array.from(formElement.querySelectorAll(submitButtonSelector));
        inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
                if (inputElement.validity.valid) {
                    inputElement.classList.remove(inputErrorClass);
                    errorElement.textContent = '';
                    errorElement.classList.remove(errorClass);

                } else {
                    inputElement.classList.add(inputErrorClass);
                    errorElement.textContent = inputElement.validationMessage;
                    errorElement.classList.add(errorClass);
              };
              

                //функция валидации кнопки
                validButtons(inputs, buttonSubmit, inactiveButtonClass);
            });
        });

    });
};


//функция валидации кнопки
function validButtons(input, buttons, classButton) {
    const isFormValid = input.some((inputElement) => !inputElement.validity.valid);
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

enableValidation(validationObject);