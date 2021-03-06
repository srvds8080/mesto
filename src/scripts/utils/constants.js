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
const confirmWindow = document.querySelector(".popup_confirm-action");
const avatarWindow = document.querySelector(".popup_edit-avatar");


//Buttons and other DOM elements
const profileAvatar = document.querySelector(".profile__avatar");
const profileAvatarOverlay = document.querySelector('.profile__avatar_overlay');
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__about");
const profileEditButton = document.querySelector(".profile__edit-btn");
const addCardButton = document.querySelector(".profile__add-btn");
const elementsContainer = document.querySelector('.elements');
const cardTemplateContent = document.querySelector('.card-content').content.querySelector('.card-box');

//Form data
const editForm = editProfileWindow.querySelector(".popup__form");
const addForm = addCardWindow.querySelector(".popup__form");
const editAvatarForm = avatarWindow.querySelector(".popup__form")
const editFormName = editForm.querySelector(".popup__input_type_name");
const editFormDescription = editForm.querySelector(".popup__input_type_about");

//helper data
const urlUserData = "https://mesto.nomoreparties.co/v1/cohort-16/users/me";
const urlAvatar = "https://mesto.nomoreparties.co/v1/cohort-16/users/me/avatar";
const urlCards = "https://mesto.nomoreparties.co/v1/cohort-16/cards";
const userId = '0227e00e-2fc2-48f1-b527-44b2f5fab9ba';

export {
    profileAvatar,
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
    confirmWindow,
    profileAvatarOverlay,
    editAvatarForm,
    avatarWindow,
    userId,
    urlCards,
    urlUserData,
    urlAvatar
};

