import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const collectionCard = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]

const validationObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-btn',
    inactiveButtonClass: 'popup__form-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__form-error_visible'
};

//Wrappers
const previewWindow = document.querySelector(".popup_preview");
const editProfileWindow = document.querySelector(".popup_edit-profile");
const addCardWindow = document.querySelector(".popup_add-card");

//Buttons and other DOM elements
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__description");
const profileEditButton = document.querySelector(".profile__edit-btn");
const editProfileCloseButton = editProfileWindow.querySelector(".popup__close-btn");
const addCardButton = document.querySelector(".profile__add-btn");
const addCardCloseButton = addCardWindow.querySelector(".popup__close-btn");
const imgPreviewCloseButton = previewWindow.querySelector(".popup__close-btn");
const elements = document.querySelector('.elements');
const cardTemplateContent = document.querySelector('.card-content').content.querySelector('.card-box');

//Form data
const editForm = editProfileWindow.querySelector(".popup__form");
const addForm = addCardWindow.querySelector(".popup__form");
const addFormName = addForm.querySelector(".popup__input_type_place");
const addFormDestination = addForm.querySelector(".popup__input_type_destination");
const editFormName = editForm.querySelector(".popup__input_type_name");
const editFormDescription = editForm.querySelector(".popup__input_type_description");

//Objects
const editFormValidate = new FormValidator(editForm, validationObject);
const addCardFormValidate = new FormValidator(addForm, validationObject);

const enableValidation = ({formSelector, ...rest}) => {
    const formElement = Array.from(document.querySelectorAll(formSelector));
    formElement.forEach((itemForm) => {
        itemForm.addEventListener('submit', (evt) => evt.preventDefault());
    });
    editFormValidate.enableValidation();
    addCardFormValidate.enableValidation();
};
enableValidation(validationObject);

const openPopup = (popupWindow) => {
    document.addEventListener('keydown', closePopupEsc);
    popupWindow.classList.add('popup_opened');
};

function renderCard(data) {
    const card = new Card(data, cardTemplateContent, openPopup);
    elements.prepend(card.returnCard());
}

function saveEditProfile(evt) {
    evt.preventDefault();
    profileName.textContent = editFormName.value;
    profileDescription.textContent = editFormDescription.value;
    closePopup(editProfileWindow);
}

function addCardRender(evt) {
    evt.preventDefault();
    renderCard({name: addFormName.value, link: addFormDestination.value});
    closePopup(addCardWindow);
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
}

document.addEventListener('click', closePopupOverlay);

profileEditButton.addEventListener('click', () => {
    editFormName.value = profileName.textContent;
    editFormDescription.value = profileDescription.textContent;
    editFormValidate.resetForm(editForm);
    openPopup(editProfileWindow);
});

editProfileCloseButton.addEventListener('click', () => {
    closePopup(editProfileWindow);
});

addCardButton.addEventListener('click', () => {
    addCardFormValidate.resetForm(addForm);
    openPopup(addCardWindow);
});

addCardCloseButton.addEventListener('click', () => {
    closePopup(addCardWindow);
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

collectionCard.forEach((data) => {
    renderCard(data);
});
