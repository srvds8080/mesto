import {
    addCardFormValidate,
    editFormValidate,
    validationObject,
    editProfileWindow,
    addCardWindow,
    previewWindow,
    addForm,
    editForm,
    addCardButton,
    addCardCloseButton,
    addFormDestination,
    addFormName,
    cardTemplateContent,
    editFormDescription,
    editFormName,
    editProfileCloseButton,
    elementsContainer,
    imgPreviewCloseButton,
    profileDescription,
    profileEditButton,
    profileName,
    collectionCard,
    openPopup,
    enableValidation
} from "../utils/constants.js";
import {Card} from '../components/Card.js';
import {Section} from "../components/Section.js";

enableValidation(validationObject);

const mySection = new Section({
        items: collectionCard,
        renderer: (data) => {
            const card = new Card(data, cardTemplateContent, openPopup);
            return card.returnCard();
        }
    },
    elementsContainer);

mySection.renderItems()

//
// function saveEditProfile(evt) {
//     evt.preventDefault();
//     profileName.textContent = editFormName.value;
//     profileDescription.textContent = editFormDescription.value;
//     closePopup(editProfileWindow);
// }
//
// function addCardRender(evt) {
//     evt.preventDefault();
//     renderCard({name: addFormName.value, link: addFormDestination.value});
//     closePopup(addCardWindow);
// }
//
// function closePopup(popupWindow) {
//     popupWindow.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closePopupEsc);
// }
//
// function closePopupEsc(evt) {
//     const popup = document.querySelector('.popup_opened');
//     if (evt.key === 'Escape') {
//         closePopup(popup);
//     }
// }
//
// function closePopupOverlay(evt) {
//     const popup = document.querySelector('.popup_opened');
//     if (evt.target.classList.contains('popup')) {
//         closePopup(popup);
//     }
// }
//
// document.addEventListener('click', closePopupOverlay);
//
// profileEditButton.addEventListener('click', () => {
//     editFormName.value = profileName.textContent;
//     editFormDescription.value = profileDescription.textContent;
//     editFormValidate.resetForm(editForm);
//     openPopup(editProfileWindow);
// });
//
// editProfileCloseButton.addEventListener('click', () => {
//     closePopup(editProfileWindow);
// });
//
// addCardButton.addEventListener('click', () => {
//     addCardFormValidate.resetForm(addForm);
//     openPopup(addCardWindow);
// });
//
// addCardCloseButton.addEventListener('click', () => {
//     closePopup(addCardWindow);
// });
//
// imgPreviewCloseButton.addEventListener('click', () => {
//     closePopup(previewWindow);
// })
// editForm.addEventListener('submit', (editProfileWindow) => {
//     saveEditProfile(editProfileWindow);
// });
//
// addForm.addEventListener('submit', (addCardWindow) => {
//     addCardRender(addCardWindow);
// });

