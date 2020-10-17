import {PopupWithForm} from "./PopupWithForm";

export class PopupConfirmAction extends PopupWithForm {
    constructor(popupSelector, submitAction) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submit = submitAction;
    }

    setEventListeners(node) {
        this._node = node;
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleSubmit);
    }

    close() {
        super.close();
        this._form.removeEventListener('submit', this._handleSubmit);
    }

    _handleSubmit = () => {
        this._submit(this._node);
    }


}