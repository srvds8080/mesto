//Wrappers
const editProfileWindow = document.querySelector(".popup_edit-profile");
const addCardWindow = document.querySelector(".popup_add-card");
const previewWindow = document.querySelector(".popup_preview");

//Buttons and other DOM elements
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__description");
const elements = document.querySelector('.elements');

const addCardButtton = document.querySelector(".profile__add-btn");
const addCardCloseButton = addCardWindow.querySelector(".popup__close-btn");
const addCardFormButton = addCardWindow.querySelector(".popup__form-btn");

const imgPreviewCloseButton = previewWindow.querySelector(".popup__close-btn");

const profileEditButtton = document.querySelector(".profile__edit-btn");
const editProfileCloseButton = editProfileWindow.querySelector(".popup__close-btn");
const saveProfileEditButton = editProfileWindow.querySelector(".popup__form-btn");

const cardTemplateContent = document.querySelector('.card-content').content.querySelector('.card-box');

//Form data
const addForm = addCardWindow.querySelector(".popup__form");
const addFormName = addForm.querySelector(".popup__form-input_type_place");
const addFormDestination = addForm.querySelector(".popup__form-input_type_destination");

const editForm = editProfileWindow.querySelector(".popup__form");
const editFormName = editForm.querySelector(".popup__form-input_type_name");
const editFormDescription = editForm.querySelector(".popup__form-input_type_description");

//Array
const colectionCard = [
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



function createCard(data) {
	const cardBox = cardTemplateContent.cloneNode(true);

	const cardImg = cardBox.querySelector('.card-box__img');
	const cardTitle = cardBox.querySelector('.card-box__text');
	const cardLike = cardBox.querySelector('.card-box__button');
	const cardDelete = cardBox.querySelector('.card-box__delete');

	const previewDescription = previewWindow.querySelector('.popup__preview-description');
	const previewImg = previewWindow.querySelector('.popup__img-preview');


	cardImg.src = data.link;
	cardTitle.textContent = data.name;
	cardImg.alt = data.name;


	cardLike.addEventListener('click', () => {
		cardLike.classList.toggle('card-box_button-checked');
	})

	cardImg.addEventListener('click', () => {
		previewDescription.textContent = data.name;
		previewImg.src = data.link;
		openPopup(previewWindow);
	})

	cardDelete.addEventListener('click', () => {
		cardDelete.closest('.card-box').remove();
	})

	return cardBox;
}



function renderCard(data) {
	elements.prepend(createCard(data));
}
colectionCard.forEach((data) => {
	renderCard(data);
})

function openPopup(popupWindow) {
	if (!popupWindow.classList.contains('popup_opened')) {
		editFormName.value = profileName.textContent;
		editFormDescription.value = profileDescription.textContent;
	}
	popupWindow.classList.toggle('popup_opened');
}

function saveEditProfile(evt) {
	evt.preventDefault();
	profileName.textContent = editFormName.value;
	profileDescription.textContent = editFormDescription.value;
	openPopup(editProfileWindow);
}

function addCardRender(evt) {
	evt.preventDefault();
	renderCard({ name: addFormName.value, link: addFormDestination.value });
	openPopup(addCardWindow);
}


profileEditButtton.addEventListener('click', () => {
	openPopup(editProfileWindow);
});

editProfileCloseButton.addEventListener('click', () => {
	openPopup(editProfileWindow);
});

addCardButtton.addEventListener('click', () => {
	openPopup(addCardWindow);
});

addCardCloseButton.addEventListener('click', () => {
	openPopup(addCardWindow);
});

editForm.addEventListener('submit', (editProfileWindow) => {
	saveEditProfile(editProfileWindow);
});

addForm.addEventListener('submit', (addCardWindow) => {
	addCardRender(addCardWindow);
});

imgPreviewCloseButton.addEventListener('click', () => {
	openPopup(previewWindow);
})
