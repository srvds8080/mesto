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
    profileAvatarOverlay,
    editAvatarForm,
    avatarWindow,
    urlUserData,
    urlAvatar,
    urlCards,
    userId
} from "../scripts/utils/constants.js";

//Functions and callBacks
const enableValidation = (formObject) => {
    formObject.enableValidation();
};

const setUserDataInForm = ({name, about}, formName, formDescription) => {
    formName.value = name;
    formDescription.value = about;
}
// callback submit for editProfileForm
const submitActionEditProfileForm = ({description: about, name: name}) => {
    editProfilePopup.renderLoader(true);
    api.changeUserData(urlUserData, {about, name})
        .then(res => {
            userInfo.setUserInfo(res);
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            editProfilePopup.renderLoader(false);
            editProfilePopup.close();
        })
}

//callback submit for AddCardForm
const submitActionAddCardForm = ({place: name, url: link}) => {
    addCardPopup.renderLoader(true);
    api.addCard(urlCards, {name, link})
        .then((addedCard) => {
            mySection.addItem(rendererCard(addedCard, addedCard.owner._id));
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            addCardPopup.renderLoader(false);
            addCardPopup.close();
        })
}
//callback submit for confirmPopup
const submitActionConfirmForm = ({id, node}) => {
    confirmPopup.renderLoader(true);
    api.deleteCard(urlCards, id)
        .then(() => {
            node.remove();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            confirmPopup.renderLoader(false);
            confirmPopup.close();
        })
}
//callback submit for avatarForm
const submitActionEditAvatarForm = (data) => {
    editAvatar.renderLoader(true);
    api.changeUserAvatar(urlAvatar, data).then(res => {
        return userInfo.setUserInfo(res);
    })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            editAvatar.renderLoader(false);
            editAvatar.close();
        })
}

const rendererCard = (cardData, userId) => {
    const card = new Card(cardData, userId,
        cardTemplateContent,
        //обработчик на клик по изображению:
        (name, link) => {
            popupWithImage.setEventListeners();
            popupWithImage.open(name, link);
        },
        (data) => {
            confirmPopup.open();
            confirmPopup.setEventListeners(data);
        },
        (idCard, likeValue) => {
            if (likeValue) {
                api.removeLikeCard(urlCards, idCard).then((res) => {
                    card.handleLikeButton(false, res.likes)
                })
            } else if (!likeValue) {
                api.checkLikeCard(urlCards, idCard).then((res) => {
                    card.handleLikeButton(true, res.likes);
                })
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
const editAvatarFormValidate = new FormValidator(editAvatarForm, validationObject);
const popupWithImage = new PopupWithImage(previewWindow);
const editAvatar = new PopupWithForm(avatarWindow, submitActionEditAvatarForm);
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
    .catch((err) => {
        console.log(err);
    });

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
profileAvatarOverlay.addEventListener('click', () => {
    editFormValidate.resetForm(editAvatarForm);
    editAvatar.setEventListeners();
    editAvatar.open();
})

//init validation
enableValidation(editFormValidate);
enableValidation(addCardFormValidate);
enableValidation(editAvatarFormValidate);