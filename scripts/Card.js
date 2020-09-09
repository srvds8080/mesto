class Card {

    constructor(data, templateContent) {
        this._cardBox = templateContent.cloneNode(true);

        this._cardImg = this._cardBox.querySelector('.card-box__img');
        this._cardTitle = this._cardBox.querySelector('.card-box__text');
        this._cardLike = this._cardBox.querySelector('.card-box__button');
        this._cardDelete = this._cardBox.querySelector('.card-box__delete');

        this._previewDescription = previewWindow.querySelector('.popup__preview-description');
        this._previewImg = previewWindow.querySelector('.popup__img-preview');

        this._cardImg.src = data.link;
        this._cardTitle.textContent = data.name;
        this._cardImg.alt = data.name;

        this._cardLike.addEventListener('click', () => {
            this._cardLike.classList.toggle('card-box_button-checked');
        })

        this._cardImg.addEventListener('click', () => {
            this._previewDescription.textContent = data.name;
            this._previewImg.src = data.link;
            openPopup(previewWindow);
        })

        this._cardDelete.addEventListener('click', () => {
            this._cardDelete.closest('.card-box').remove();
        })

    }

    returnCard() {
        return this._cardBox;
    }

}
export {Card}