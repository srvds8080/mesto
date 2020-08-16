const validationObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-btn',
    inactiveButtonClass: 'popup__form-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__form-error_visible'
};

//функция валидности инпутов
function validInputs(input, errorElement, errorClass, inputErrorClass) {
    input.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
};

//функция невалидности инпутов
function unValidInputs(input, errorElement, errorClass, inputErrorClass) {
    input.classList.add(errorClass);
    input.classList.add(inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(errorClass);
};

function checkedInput(inputs) {
    return inputs.some((inputItem) => !inputItem.validity.valid);
};

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

//функция валидации кнопки
function validButtons(inputs, buttons, classButton) {
    const isFormValid = checkedInput(inputs);
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
    };
};

function setItems(itemForm, itemSelector) {
    return Array.from(itemForm.querySelectorAll(itemSelector));
};

const enableValidation = ({ formSelector, ...rest }) => {
    const formElement = Array.from(document.querySelectorAll(formSelector));
    setEventListeners(formElement, rest)
};

const setEventListeners = (formElement, { inputSelector, errorClass, inputErrorClass, inactiveButtonClass, submitButtonSelector }) => {
    formElement.forEach((itemForm) => {
        itemForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        const inputs = setItems(itemForm, inputSelector);
        const buttonSubmit = setItems(itemForm, submitButtonSelector);

        inputs.forEach((input) => {
            validError(itemForm, input, errorClass, inputErrorClass);
            validButtons(inputs, buttonSubmit, inactiveButtonClass);
            input.addEventListener('input', () => {
                validError(itemForm, input, errorClass, inputErrorClass);
                validButtons(inputs, buttonSubmit, inactiveButtonClass);
            });
        });
    });
};

enableValidation(validationObject);