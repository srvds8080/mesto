export class Card {

    constructor(data, userId, templateContent, handleCardClick, confirmAction, handleLike) {
        this._data = data;
        this._userId = userId;
        this._templateContent = templateContent;
        this._handlePreview = handleCardClick;
        this._confirmAction = confirmAction;
        this._handleLike = handleLike;
        this._data.counterLikes = this._data.likes.length;
        this._likeValue = this._data.likes.some(user => user._id === this._userId)
    }

    returnCard() {
        this._getLayout();
        this._setListener();
        return this._cardBox;
    }

    _getLayout() {
        this._getTemplate();
        if (this._data.likes) {
            this._cardLikeCount = this._cardBox.querySelector('.card-box__button_likes');
        }
        this._cardDelete = this._cardBox.querySelector('.card-box__delete');
        this._cardImg = this._cardBox.querySelector('.card-box__img');
        this._cardTitle = this._cardBox.querySelector('.card-box__text');
        this._cardLike = this._cardBox.querySelector('.card-box__button');
        if (this._likeValue) {
            this._cardLike.classList.add('card-box_button-checked');
        }

        if (this._data.owner && this._userId !== this._data.owner._id) {
                this._cardDelete.classList.add('card-box__delete_is-hidden');
        }
        this._setContent();
    }

    _getTemplate() {
        this._cardBox = this._templateContent.cloneNode(true);
        return this._cardBox;
    }

    _setContent() {
        this._cardImg.src = this._data.link;
        this._cardTitle.textContent = this._data.name;
        this._cardImg.alt = this._data.name;
        this._cardLikeCount.textContent = this._data.counterLikes;
    }

    _setListener() {
        this._cardLike.addEventListener('click', () => {
            this._handleLike(this._data._id, this._likeValue);
        })
        this._cardImg.addEventListener('click', () => {
            this._handlePreview(this._data.name, this._data.link);
        })
        if (this._cardDelete) {
            this._cardDelete.addEventListener('click', () => {
                this._confirmAction({id: this._data._id, node: this._cardBox});
            });
        }
    }

    handleLikeButton(value, likesArray) {
        if (!value) {
            this._cardLike.classList.remove('card-box_button-checked');
        } else {
            this._cardLike.classList.add('card-box_button-checked');
        }
        this._likeValue = value;
        this._cardLikeCount.textContent = likesArray.length;
    }
}