const profileEditButtton = document.querySelector(".profile__edit-btn"); //редактировать профиль

const profileName = document.querySelector(".profile__info-name");// элемент имя профиля

const profileDescription = document.querySelector(".profile__description");// элемент описание профиля

const popupWindow = document.querySelector(".popup"); // модальное окно

const closeProfileEditButton = document.querySelector(".popup__close-btn");// кнопка закрыть окно

const editForm = document.querySelector(".popup__form");// форма редактировать профиль

const editFormName = editForm.querySelector(".popup__form-input_type_name");//поле ввода имени

const editFormDescription = editForm.querySelector(".popup__form-input_type_description");// поле ввода описания профиля 

const saveProfileEditButton = popupWindow.querySelector(".popup__form-btn");//  сохранить проект button

function openPopup() {
	editFormName.value = profileName.textContent;
	editFormDescription.value = profileDescription.textContent;
	popupWindow.classList.add('popup_opened');
}

function closePopup() {
	popupWindow.classList.remove('popup_opened');
}

function saveForm(evt) {
	evt.preventDefault();
	profileName.textContent = editFormName.value;
	profileDescription.textContent = editFormDescription.value;
	closePopup();
}

profileEditButtton.addEventListener('click', openPopup); // открыть окна
closeProfileEditButton.addEventListener('click', closePopup);// закрыть окно
editForm.addEventListener('submit', saveForm);// активация кнопки сохранить
