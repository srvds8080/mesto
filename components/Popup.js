
export class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
    }

    open() {
        this._popup.classList.add('popup_opened');
        this.setEventListeners()
    }

    close() {
        document.removeEventListener('keydown', () => this._handleEscClose());
        this._popup.classList.remove('popup_opened');
    }

    setEventListeners() {
        document.addEventListener('keydown', () => this._handleEscClose());
        document.addEventListener('click', () => this._handleOverlayClose());
        this._popup.querySelector('.popup__close-btn').addEventListener('click', () => this.close());
    }

    _handleOverlayClose() {
        if (event.target.classList.contains('popup')) {
            this.close();
        }
    }

    _handleEscClose() {
        if (event.key === 'Escape') {
            this.close()
        }
    }
}

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imgPreview = this._popup.querySelector('.popup__img-preview');
    }

    open(card) {
        super.open();
        this._imgPreview.src = card._data.link;
        this._imgPreview.alt = card._data.name;
    }

}

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitAction) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submit = submitAction;
        this._arrayInputs = Array.from(this._form.querySelectorAll('.popup__input'));
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', () => {
            this._submit(this._getInputValues());
            this.close();
        });
    }

    close() {
        this._resetForm();
        super.close();
    }

    _resetForm() {
        this._arrayInputs.forEach((item) => item.value = '');
    }

    _getInputValues() {
        this._inputsValue = {};
        this._arrayInputs.forEach((input) => {
            //устанавливаем свойством объекта последнее слово в свойстве "name",
            //и присваиваем ему значением input.value:
            this._inputsValue[input.name.split("_").pop()] = input.value;
        })
        return this._inputsValue;
    }
}
