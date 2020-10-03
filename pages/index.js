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
    enableValidation,
    popupWithImage,
    addCardPopup,
    editProfilePopup,
} from "../utils/constants.js";
import {Card} from '../components/Card.js';
import {Section} from "../components/Section.js";

enableValidation(validationObject);

const mySection = new Section({
        items: collectionCard,
        renderer: (data) => {
            const card = new Card(data,
                cardTemplateContent,
                {
                    //обработчик на клик по изображению:
                    handlePreview: () => {
                        popupWithImage.open(card);
                        popupWithImage.setEventListeners();
                    }
                });
            return card.returnCard();
        }
    },
    elementsContainer);
mySection.renderItems()

profileEditButton.addEventListener('click', () => {
    // editFormValidate.resetForm(editForm)
    editProfilePopup.open()
    editProfilePopup.setEventListeners()
})
addCardButton.addEventListener('click', () => {
    addCardPopup.open();
    addCardPopup.setEventListeners();
});

// function addCardRender(evt) {
//     evt.preventDefault();
//     renderCard({name: addFormName.value, link: addFormDestination.value});
//     closePopup(addCardWindow);
// }
//
// profileEditButton.addEventListener('click', () => {
//     editFormName.value = profileName.textContent;
//     editFormDescription.value = profileDescription.textContent;
//     editFormValidate.resetForm(editForm);
//     openPopup(editProfileWindow);
// });
//
//
