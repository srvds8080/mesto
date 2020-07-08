const profileEditButtton = document.querySelector(".profile__edit-btn"); //редактировать профиль

const profileName = document.querySelector(".profile__info-name");// элемент имя профиля

const profileDescription = document.querySelector(".profile__description");// элемент описание профиля

const popupWindow = document.querySelector(".popup"); // модальное окно

const closeProfileEditButton = document.querySelector(".popup__close-btn");// кнопка закрыть окно

const editForm = document.querySelector(".edit-form");// форма редактировать профиль

const editFormName = editForm.querySelector(".form__input_type_name");//поле ввода имени

const editFormDescription = editForm.querySelector(".form__input_type_description");// поле ввода описаня провиля 

const saveProfileEditButton = popupWindow.querySelector(".edit-form__btn");//  сохранить проект button





function openPopup() {
	let nameContent = profileName.textContent;
	let descriptionContent = profileDescription.textContent;
	editFormName.value = nameContent;
	editFormDescription.value = descriptionContent;
	popupWindow.classList.add('popup_opened');

}
function closePopup() {
	popupWindow.classList.remove('popup_opened');
}
function saveForm(evt) {
	evt.preventDefault();
	profileName.textContent = editFormName.value;
	profileDescription.textContent = editFormDescription.value;
	popupWindow.classList.remove('popup_opened');
}
profileEditButtton.addEventListener('click', openPopup); // открыть окна
closeProfileEditButton.addEventListener('click', closePopup);// закрыть окно
editForm.addEventListener('submit', saveForm);