const colectionCard = [{
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
];


//Wrappers
const editProfileWindow = document.querySelector(".popup_edit-profile");
const addCardWindow = document.querySelector(".popup_add-card");
const previewWindow = document.querySelector(".popup_preview");

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
const addForm = addCardWindow.querySelector(".popup__form");
const addFormName = addForm.querySelector(".popup__input_type_place");
const addFormDestination = addForm.querySelector(".popup__input_type_destination");
const addFormError = Array.from(addForm.querySelectorAll('.popup__form-error'));

const editForm = editProfileWindow.querySelector(".popup__form");
const editFormName = editForm.querySelector(".popup__input_type_name");
const editFormDescription = editForm.querySelector(".popup__input_type_description");
const editFormError = Array.from(editForm.querySelectorAll('.popup__form-error'));

class Card {

    constructor(data) {
        this._cardBox = cardTemplateContent.cloneNode(true);

        this._cardImg = this._cardBox.querySelector('.card-box__img');
        this._cardTitle = this._cardBox.querySelector('.card-box__text');
        this._cardLike = this._cardBox.querySelector('.card-box__button');
        this._cardDelete = this._cardBox.querySelector('.card-box__delete');

        this._previewDescription = previewWindow.querySelector('.popup__preview-description');
        this._previewImg = previewWindow.querySelector('.popup__img-preview');

        this._cardImg.src = data.link;
        this._cardTitle.textContent = data.name;
        this._cardImg.alt = data.name;

        this._cardLike.addEventListener('click', () => {
            this._cardLike.classList.toggle('card-box_button-checked');
        })

        this._cardImg.addEventListener('click', () => {
            this._previewDescription.textContent = data.name;
            this._previewImg.src = data.link;
            openPopup(previewWindow);
        })

        this._cardDelete.addEventListener('click', () => {
            this._cardDelete.closest('.card-box').remove();
        })

    }

    returnCard() {
        return this._cardBox;
    }

}

function renderCard(data) {
    elements.prepend(new Card(data).returnCard());
}

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

//закрытие попаgов Escape
function closePopupEsc(evt) {
    const popup = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(popup);
    }
}

//закрытие через overlay
function closePopupOverlay(evt) {
    const popup = document.querySelector('.popup_opened');
    if (evt.target.classList.contains('popup')) {
        closePopup(popup);
    }
};
document.addEventListener('click', closePopupOverlay);

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