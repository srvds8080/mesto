const profileEditButtton = document.querySelector(".profile__edit-btn"); //редактировать профиль

const profileName = document.querySelector(".profile__info-name");// элемент имя профиля

const profileDescription = document.querySelector(".profile__description");// элемент описание профиля

const popupWindow = document.querySelector(".popup"); // модальное окно

const closeProfileEditButton = document.querySelector(".popup__close-btn");// кнопка закрыть окно

const editForm = document.querySelector(".popup__form");// форма редактировать профиль

const editFormName = editForm.querySelector(".popup__form-input_type_name");//поле ввода имени

const editFormDescription = editForm.querySelector(".popup__form-input_type_description");// поле ввода описания профиля 

const saveProfileEditButton = popupWindow.querySelector(".popup__form-btn");//  сохранить проект button

const elements = document.querySelector('.elements');

const initialCards = [
	{
		 name: 'Архыз',
		 link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		 name: 'Челябинская область',
		 link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		 name: 'Иваново',
		 link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		 name: 'Камчатка',
		 link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		 name: 'Холмогорский район',
		 link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		  name: 'Байкал',
		  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];



initialCards.forEach((data) => {
	const cardTemplateContent = document.querySelector('.card-content').content.querySelector('.card-box');
	const cardBox = cardTemplateContent.cloneNode(true);
	const cardImg = cardBox.querySelector('.card-box__img');
	const cardTitle = cardBox.querySelector('.card-box__text');
	const cardLike = cardBox.querySelector('.card-box__button');
	const cardDelete = cardBox.querySelector('.card-box__delete');

	cardImg.src = data.link;
	cardImg.alt = data.name;
	cardTitle.textContent = data.name;
	elements.prepend(cardBox);
})


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


const openAddCardModalButton = document.querySelector('.profile__add-btn');

openAddCardModalButton.addEventListener('click', () => {
	
})