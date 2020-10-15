import './index.css';
import {Api} from "../scripts/components/Api.js";
import {Card} from "../scripts/components/Card.js";
import {FormValidator} from "../scripts/components/FormValidator.js";
import {Section} from "../scripts/components/Section.js";
import {PopupWithImage} from "../scripts/components/PopupWithImage.js";
import {PopupWithForm} from "../scripts/components/PopupWithForm.js";
import {UserInfo} from "../scripts/components/UserInfo.js";
import {PopupConfirmAction} from "../scripts/components/PopupConfirmAction";

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
    profileAvatar,
    profileName,
    profileDescription,
    confirmWindow,
} from "../scripts/utils/constants.js";

const urlUserData = "https://mesto.nomoreparties.co/v1/cohort-16/users/me";
const urlCards = "https://mesto.nomoreparties.co/v1/cohort-16/cards";
const userId = '0227e00e-2fc2-48f1-b527-44b2f5fab9ba';

//Functions and callBacks
const enableValidation = (formObject) => {
    formObject.enableValidation();
};

const setUserDataInForm = ({name, about}, formName, formDescription) => {
    formName.value = name;
    formDescription.value = about;
}

//callback submit for editProfileForm
const submitActionEditProfileForm = ({description: about, name: name}) => {
    userInfo.changeUserInfo({name, about}, urlUserData);
    editProfilePopup.close();
}
//callback submit for confirmForm
const submitActionAddCardForm = ({place: name, url: link}) => {
    api.addCard(urlCards, {name, link}).then((addedCard) => {
        mySection.addItem(rendererCard(addedCard, addedCard.owner._id));
    })
    addCardPopup.close();
}
//callback submit for confirmPopup
const submitActionConfirmForm = ({id, node}) => {
    api.deleteCard(urlCards, id).then(res => {
        console.log(res);
        node.remove();
        confirmPopup.close();
    })

}

const rendererCard = (cardData, userId) => {
    const card = new Card(cardData, userId,
        cardTemplateContent,
        {
            //обработчик на клик по изображению:
            handleCardClick: (name, link) => {
                popupWithImage.setEventListeners();
                popupWithImage.open(name, link);
            }
        },
        {
            confirmAction: (data) => {
                confirmPopup.open();
                confirmPopup.setEventListeners(data);
            }
        },
        {
            handleLike: (idCard, likeValue) => {
                if(likeValue){
                    api.removeLikeCard(urlCards,idCard).then((res) => {
                        card.handleLikeButton(false, res.likes)
                    })
                } else if(!likeValue){
                    api.checkLikeCard(urlCards,idCard).then((res) => {
                        card.handleLikeButton(true, res.likes);
                    })
                }
            }
        }
    );
    return card.returnCard();
}

const renderSection = (cardsData, userId) => {
    mySection.renderItems(cardsData, userId);
}
//Create objects
const api = new Api(userId, 'application/json');
const mySection = new Section({renderer: rendererCard}, elementsContainer);
const editFormValidate = new FormValidator(editForm, validationObject);
const addCardFormValidate = new FormValidator(addForm, validationObject);
const popupWithImage = new PopupWithImage(previewWindow);
const addCardPopup = new PopupWithForm(addCardWindow, submitActionAddCardForm);
const editProfilePopup = new PopupWithForm(editProfileWindow, submitActionEditProfileForm);
const confirmPopup = new PopupConfirmAction(confirmWindow, submitActionConfirmForm);
const userInfo = new UserInfo({name: profileName, about: profileDescription, avatar: profileAvatar}, api);

//init render window
api.getAllData(urlCards, urlUserData).then((data) => {
    const [cards, userData] = data;
    const {_id: userId} = userData;
    renderSection(cards, userId);
    userInfo.setUserInfo(userData);
})

//Add DOM listeners
addCardButton.addEventListener('click', () => {
    addCardFormValidate.resetForm(addForm);
    addCardPopup.setEventListeners();
    addCardPopup.open();
})
profileEditButton.addEventListener('click', () => {
    editFormValidate.resetForm(editForm);
    setUserDataInForm(userInfo.getUserInfo(), editFormName, editFormDescription);
    editProfilePopup.setEventListeners();
    editProfilePopup.open();
})

//init validation
enableValidation(editFormValidate);
enableValidation(addCardFormValidate);

// api.getUserData(urlUserData).then(res =>console.log(res)).catch(res => console.log(res))
// api.getCard(urlCards).then((res)=>{
//     const arrayCards = res;
//     arrayCards.forEach(item => {
//         console.log(item)
//     })
// })
//
