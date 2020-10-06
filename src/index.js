// import './index.css';
import {
    addCardFormValidate,
    editFormValidate,
    validationObject,
    addForm,
    editForm,
    addCardButton,
    editFormDescription,
    editFormName,
    profileEditButton,
    enableValidation,
    addCardPopup,
    editProfilePopup,
    userInfo,
    setUserDataInForm,
    mySection
} from "../utils/constants.js";

mySection.renderItems();

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

enableValidation(validationObject);
