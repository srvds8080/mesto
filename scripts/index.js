//Wrappers
const editProfileWindow = document.querySelector(".popup_edit-profile");
const addCardWindow = document.querySelector(".popup_add-card");
const previewWindow = document.querySelector(".popup_preview");

//Buttons and other DOM elements
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__description");
const elements = document.querySelector('.elements');

const addCardButton = document.querySelector(".profile__add-btn");
const addCardCloseButton = addCardWindow.querySelector(".popup__close-btn");

const imgPreviewCloseButton = previewWindow.querySelector(".popup__close-btn");

const profileEditButtton = document.querySelector(".profile__edit-btn");
const editProfileCloseButton = editProfileWindow.querySelector(".popup__close-btn");

const cardTemplateContent = document.querySelector('.card-content').content.querySelector('.card-box');

//Form data
const addForm = addCardWindow.querySelector(".popup__form");
const addFormName = addForm.querySelector(".popup__input_type_place");
const addFormDestination = addForm.querySelector(".popup__input_type_destination");
const addFormError = Array.from(addForm.querySelectorAll('.popup__form-error'));

const editForm = editProfileWindow.querySelector(".popup__form");
const editFormName = editForm.querySelector(".popup__input_type_name");
const editFormDescription = editForm.querySelector(".popup__input_type_description");
const editFormError = Array.from(editForm.querySelectorAll('.popup__form-error'));

function createCard(data) {
    const cardBox = cardTemplateContent.cloneNode(true);

    const cardImg = cardBox.querySelector('.card-box__img');
    const cardTitle = cardBox.querySelector('.card-box__text');
    const cardLike = cardBox.querySelector('.card-box__button');
    const cardDelete = cardBox.querySelector('.card-box__delete');

    const previewDescription = previewWindow.querySelector('.popup__preview-description');
    const previewImg = previewWindow.querySelector('.popup__img-preview');


    cardImg.src = data.link;
    cardTitle.textContent = data.name;
    cardImg.alt = data.name;


    cardLike.addEventListener('click', () => {
        cardLike.classList.toggle('card-box_button-checked');
    })

    cardImg.addEventListener('click', () => {
        previewDescription.textContent = data.name;
        previewImg.src = data.link;
        openPopup(previewWindow);
    })

    cardDelete.addEventListener('click', () => {
        cardDelete.closest('.card-box').remove();
    })

    return cardBox;
}

function renderCard(data) {
    elements.prepend(createCard(data));
}

colectionCard.forEach((data) => {
        renderCard(data);
    })
    //сброс значений сообщений ошибок
function errorReset(arrayError) {
    arrayError.forEach((errorElement) => {
        errorElement.textContent = '';
        errorElement.classList.remove('popup__form-error_visible');
    })
}

//сброс значений инпутов форм
function resetInput(form) {
    form.reset();
    const inputReset = Array.from(form.querySelectorAll('.popup__input')).forEach((inputResetElement) => {
        inputResetElement.classList.remove('popup__input_type_error');
    })

}
//закрытие попаgов esc
function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup(addCardWindow);
        closePopup(editProfileWindow);
        closePopup(previewWindow);
        errorReset(addFormError);
        errorReset(editFormError);
        resetInput(addForm);
        resetInput(editForm);
    }
}
//закрытие через overlay
const popups = Array.from(document.querySelectorAll('.popup')).forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(evt.target);
            errorReset(addFormError);
            errorReset(editFormError);
            resetInput(addForm);
            resetInput(editForm);
        }
    });
});

function openPopup(popupWindow) {
    document.addEventListener('keydown', closePopupEsc);
    popupWindow.classList.add('popup_opened');
}

function closePopup(popupWindow) {
    popupWindow.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}

function saveEditProfile(evt) {
    evt.preventDefault();
    profileName.textContent = editFormName.value;
    profileDescription.textContent = editFormDescription.value;
    closePopup(editProfileWindow);
}

function addCardRender(evt) {
    evt.preventDefault();
    renderCard({ name: addFormName.value, link: addFormDestination.value });
    closePopup(addCardWindow);
}

profileEditButtton.addEventListener('click', () => {
    if (!editProfileWindow.classList.contains('popup_opened')) {
        editFormName.value = profileName.textContent;
        editFormDescription.value = profileDescription.textContent;
    }
    openPopup(editProfileWindow);
});

editProfileCloseButton.addEventListener('click', () => {
    closePopup(editProfileWindow);
    errorReset(editFormError);
    resetInput(editForm);
});

addCardButton.addEventListener('click', () => {
    openPopup(addCardWindow);
});

addCardCloseButton.addEventListener('click', () => {
    closePopup(addCardWindow);
    errorReset(addFormError);
    resetInput(addForm);
});

imgPreviewCloseButton.addEventListener('click', () => {
    closePopup(previewWindow);
})
editForm.addEventListener('submit', (editProfileWindow) => {
    saveEditProfile(editProfileWindow);
});

addForm.addEventListener('submit', (addCardWindow) => {
    addCardRender(addCardWindow);
});