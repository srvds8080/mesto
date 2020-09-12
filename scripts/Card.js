class Card {

    constructor(data, templateContent, openCard) {
        this._data = data;
        this._cardBox = templateContent.cloneNode(true);
        this._previewWindow = document.querySelector(".popup_preview");
        this._openCard = openCard;
    }

    returnCard() {
        this._getLayout();
        this._setListener();
        return this._cardBox;
    }

    _getLayout() {
        this._previewDescription = this._previewWindow.querySelector('.popup__preview-description');
        this._previewImg = this._previewWindow.querySelector('.popup__img-preview');
        this._cardImg = this._cardBox.querySelector('.card-box__img');
        this._cardTitle = this._cardBox.querySelector('.card-box__text');
        this._cardLike = this._cardBox.querySelector('.card-box__button');
        this._cardDelete = this._cardBox.querySelector('.card-box__delete');
        this._setContent();
    }

    _setContent() {
        this._cardImg.src = this._data.link;
        this._cardTitle.textContent = this._data.name;
        this._cardImg.alt = this._data.name;
    }

    _setListener() {
        this._cardLike.addEventListener('click', () => {
            this._itemChecked();
        })
        this._cardImg.addEventListener('click', () => {
            this._previewCard();
        })
        this._cardDelete.addEventListener('click', () => {
            this._removeCard();
        })
    }

    _itemChecked() {
        this._cardLike.classList.toggle('card-box_button-checked');
    }

    _previewCard() {
        this._previewDescription.textContent = this._data.name;
        this._previewImg.src = this._data.link;
        this._openCard(this._previewWindow);
    }

    _removeCard() {
        this._cardDelete.closest('.card-box').remove();
    }
}

export {Card}