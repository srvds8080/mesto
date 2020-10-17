export class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this.close = this.close.bind(this);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.classList.remove('popup_opened');
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._handleOverlayClose);
        this._popup.querySelector('.popup__close-btn').addEventListener('click', this.close);
    }

    _handleOverlayClose = (event) => {
        if (event.target.classList.contains('popup')) {
            this.close();
        }
    }

    _handleEscClose = (event) => {
        if (event.key === 'Escape') {
            this.close()
        }
    }
}

