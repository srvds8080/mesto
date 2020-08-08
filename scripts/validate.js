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
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

const consoledestructedObject = ({formSelector}) => {
    console.log(formSelector)

}
consoledestructedObject();

// const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
//   const forms = Array.from(document.querySelectorAll(formSelector));
//   forms.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     const inputs = Array.from(formsElement.querySelectorAll(inputSelector));
//     const buttons = Array.from(formsElement.querySelectorAll(submitButtonSelector));
//     inputs.forEach((inputElement) => {
//       inputElement.addEventListener('input', () => {
//         const errorElement = formsElement.querySelector(`#${inputElement.name}-error`);
//         console.log('input');
//       });
//     });
//   });
// };



// enableValidation();