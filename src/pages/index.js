import './index.css';
import {Card} from "../scripts/components/Card.js";
import {FormValidator} from "../scripts/components/FormValidator.js";
import {Section} from "../scripts/components/Section.js";
import {PopupWithImage} from "../scripts/components/PopupWithImage.js";
import {PopupWithForm} from "../scripts/components/PopupWithForm.js";
import {UserInfo} from "../scripts/components/UserInfo.js";

import {
    addForm,
    editForm,
    addCardButton,
    editFormDescription,
    editFormName,
    profileEditButton,
    cardTemplateContent,
    validationObject,
    collectionCard,
    elementsContainer,
    previewWindow,
    addCardWindow,
    editProfileWindow,
    profileName,
    profileDescription
} from "../scripts/utils/constants.js";

//Functions and callBacks
const enableValidation = (formObject) => {
    formObject.enableValidation();
};

const setUserDataInForm = ({name, description}, formName, formDescription) => {
    formName.value = name;
    formDescription.value = description;
}

//callback submit for editProfileForm
const submitActionEditProfileForm = ({name, description}) => {
    userInfo.setUserInfo({name: name, description: description});
    editProfilePopup.close();
}

//callback submit for addCardForm
const submitActionAddCardForm = ({place: name, url: link}) => {
    const card = rendererCard({name, link});
    mySection.addItem(card);
    addCardPopup.close();
}

const rendererCard = (data) => {
    const card = new Card(data,
        cardTemplateContent,
        {
            //обработчик на клик по изображению:
            handleCardClick: (name, link) => {
                popupWithImage.setEventListeners();
                popupWithImage.open(name, link);
            }
        });
    return card.returnCard();
}

//Create objects
const editFormValidate = new FormValidator(editForm, validationObject);
const addCardFormValidate = new FormValidator(addForm, validationObject);
const mySection = new Section({items: collectionCard, renderer: rendererCard}, elementsContainer);
const popupWithImage = new PopupWithImage(previewWindow);
const addCardPopup = new PopupWithForm(addCardWindow, submitActionAddCardForm);
const editProfilePopup = new PopupWithForm(editProfileWindow, submitActionEditProfileForm);
const userInfo = new UserInfo({userName: profileName, userDescription: profileDescription});

//Add DOM listeners
addCardButton.addEventListener('click', () => {
    addCardFormValidate.resetForm(addForm);
    addCardPopup.setEventListeners();
    addCardPopup.open();
});

profileEditButton.addEventListener('click', () => {
    editFormValidate.resetForm(editForm);
    setUserDataInForm(userInfo.getUserInfo(), editFormName, editFormDescription);
    editProfilePopup.setEventListeners();
    editProfilePopup.open();
})

//init rendering
mySection.renderItems();

//init validation
enableValidation(editFormValidate);
enableValidation(addCardFormValidate);



