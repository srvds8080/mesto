const profileEditButtton = document.querySelector(".profile__edit-btn");
const popupWindow = document.querySelector(".popup");
const closeProfileEditButton = document.querySelector(".popup__close-btn");
// const formInputName = document.querySelector(".form__input-name");
// const formInputDescription = document.querySelector(".form__input-description");

function openPopup() {
	popupWindow.classList.toggle('popup_opened');
}

profileEditButtton.addEventListener('click', openPopup)
closeProfileEditButton.addEventListener('click', openPopup)

// function editForm() {
// 	formInputName.insertAdjacentText('')
// }

