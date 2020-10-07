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
const editProfileWindow = document.querySelector(".popup_edit-profile");
const addCardWindow = document.querySelector(".popup_add-card");
const previewWindow = document.querySelector(".popup_preview");

//Buttons and other DOM elements
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__description");
const profileEditButton = document.querySelector(".profile__edit-btn");
const addCardButton = document.querySelector(".profile__add-btn");
const elementsContainer = document.querySelector('.elements');
const cardTemplateContent = document.querySelector('.card-content').content.querySelector('.card-box');

//Form data
const editForm = editProfileWindow.querySelector(".popup__form");
const addForm = addCardWindow.querySelector(".popup__form");
const editFormName = editForm.querySelector(".popup__input_type_name");
const editFormDescription = editForm.querySelector(".popup__input_type_description");

export {
    collectionCard,
    profileName,
    profileEditButton,
    profileDescription,
    elementsContainer,
    editFormName,
    editFormDescription,
    cardTemplateContent,
    addCardButton,
    editForm,
    addForm,
    previewWindow,
    addCardWindow,
    editProfileWindow,
    validationObject,
};

