//Wrappers
const previewWindow = document.querySelector(".popup_preview");
const editProfileWindow = document.querySelector(".popup_edit-profile");
const addCardWindow = document.querySelector(".popup_add-card");
//Forms data
const editForm = editProfileWindow.querySelector(".popup__form");
const addForm = addCardWindow.querySelector(".popup__form");
const addFormError = Array.from(addForm.querySelectorAll('.popup__form-error'));
const editFormError = Array.from(editForm.querySelectorAll('.popup__form-error'));

function openPopup(popupWindow) {
    document.addEventListener('keydown', closePopupEsc);
    popupWindow.classList.add('popup_opened');
    errorReset(addFormError);
    errorReset(editFormError);
    resetInput(editForm);
    resetInput(addForm);
}

function closePopup(popupWindow) {
    popupWindow.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
    const popup = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(popup);
    }
}

function closePopupOverlay(evt) {
    const popup = document.querySelector('.popup_opened');
    if (evt.target.classList.contains('popup')) {
        closePopup(popup);
    }
};
document.addEventListener('click', closePopupOverlay);


//сброс значений сообщений ошибок
function errorReset(arrayError) {
    arrayError.forEach((errorElement) => {
        errorElement.textContent = '';
        errorElement.classList.remove('popup__form-error_visible');
    })
}

//сброс значений инпутов форм
function resetInput(form) {
    const inputReset = Array.from(form.querySelectorAll('.popup__input')).forEach((inputResetElement) => {
        inputResetElement.classList.remove('popup__input_type_error');
    })
}