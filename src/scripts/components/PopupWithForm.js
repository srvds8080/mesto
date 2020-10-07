import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitAction) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submit = submitAction;
        this._arrayInputs = Array.from(this._form.querySelectorAll('.popup__input'));
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleSubmit);
    }

    close() {
        this._resetForm();
        this._form.removeEventListener('submit', this._handleSubmit);
        super.close();

    }

    _handleSubmit = () => {
        this._submit(this._getInputValues());
        this.close();
    }

    _resetForm() {
        this._arrayInputs.forEach((item) => {
            item.value = '';
        });
    }

    _getInputValues() {
        this._inputsValue = {};
        this._arrayInputs.forEach((input) => {
            // выбираем последнее слово в атрибуте "name" элемента "input":
            this._inputsValue[input.name.split("_").pop()] = input.value;
        })
        return this._inputsValue;
    }
}