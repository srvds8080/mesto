import './index.css';
import {Card} from "../scripts/components/Card.js";
import {FormValidator} from "../scripts/components/FormValidator.js";
import {Section} from "../scripts/components/Section.js";
import {PopupWithImage} from "../scripts/components/PopupWithImage.js";
import {PopupWithForm} from "../scripts/components/PopupWithForm.js";
import {UserInfo} from "../scripts/components/UserInfo.js";
import {Api} from "../scripts/components/Api.js";

import {
    addForm,
    editForm,
    addCardButton,
    editFormDescription,
    editFormName,
    profileEditButton,
    cardTemplateContent,
    validationObject,
    elementsContainer,
    previewWindow,
    addCardWindow,
    editProfileWindow,
    profileName,
    profileDescription,
    confirmWindow,
} from "../scripts/utils/constants.js";
import {PopupConfirmAction} from "../scripts/components/PopupConfirmAction";

const urlUserData = "https://mesto.nomoreparties.co/v1/cohort-16/users/me";
const urlCards = "https://mesto.nomoreparties.co/v1/cohort-16/cards";
const userId = '0227e00e-2fc2-48f1-b527-44b2f5fab9ba';
// const cohortId = 'cohort-16';

//Functions and callBacks
const enableValidation = (formObject) => {
    formObject.enableValidation();
};

const setUserDataInForm = ({name, about}, formName, formDescription) => {
    formName.value = name;
    formDescription.value = about;
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
}//callback submit for confirmPopup
const submitActionConfirmForm = () => {
    confirmPopup.close();
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
        },
        {
            confirmAction: () => {
                confirmPopup.open();
                confirmPopup.setEventListeners();
            }
        }
    );
    return card.returnCard();
}
const renderSection = (cardsData) => {
    const mySection = new Section({items: cardsData, renderer: rendererCard}, elementsContainer);
    mySection.renderItems();
}
const api = new Api({
    headers: {
        authorization: userId
    }
})
api.getAllData(urlCards, urlUserData)
    .then((allData) => {
        const [cards, userData] = allData;
        //init rendering
        renderSection(cards);
        const userInfo = new UserInfo({name: profileName, about: profileDescription});
        userInfo.setUserInfo(userData);

    })
//Create objects
const editFormValidate = new FormValidator(editForm, validationObject);
const addCardFormValidate = new FormValidator(addForm, validationObject);
const popupWithImage = new PopupWithImage(previewWindow);
const addCardPopup = new PopupWithForm(addCardWindow, submitActionAddCardForm);
const editProfilePopup = new PopupWithForm(editProfileWindow, submitActionEditProfileForm);
const confirmPopup = new PopupConfirmAction(confirmWindow, submitActionConfirmForm);
// const userInfo = new UserInfo({name: profileName, about: profileDescription});
// console.log(userInfo);

//Add DOM listeners
addCardButton.addEventListener('click', () => {
    addCardFormValidate.resetForm(addForm);
    addCardPopup.setEventListeners();
    addCardPopup.open();
});



//init validation
enableValidation(editFormValidate);
enableValidation(addCardFormValidate);




