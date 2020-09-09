import {
    Card
} from './Card.js';

const colectionCard = [
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

//Buttons and other DOM elements
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__description");
const profileEditButtton = document.querySelector(".profile__edit-btn");
const editProfileCloseButton = editProfileWindow.querySelector(".popup__close-btn");
const addCardButton = document.querySelector(".profile__add-btn");
const addCardCloseButton = addCardWindow.querySelector(".popup__close-btn");
const imgPreviewCloseButton = previewWindow.querySelector(".popup__close-btn");
const elements = document.querySelector('.elements');
const cardTemplateContent = document.querySelector('.card-content').content.querySelector('.card-box');

//Form data
const addFormName = addForm.querySelector(".popup__input_type_place");
const addFormDestination = addForm.querySelector(".popup__input_type_destination");
const editFormName = editForm.querySelector(".popup__input_type_name");
const editFormDescription = editForm.querySelector(".popup__input_type_description");

function renderCard(data) {
    const card = new Card(data, cardTemplateContent);
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
    editForm.reset();
});

addCardButton.addEventListener('click', () => {
    if (!addCardWindow.classList.contains('popup_opened')) {
    }
    openPopup(addCardWindow);
});

addCardCloseButton.addEventListener('click', () => {
    closePopup(addCardWindow);
    errorReset(addFormError);
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

colectionCard.forEach((data) => {
    renderCard(data);
});