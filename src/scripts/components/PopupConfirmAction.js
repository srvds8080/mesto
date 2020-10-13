import {Popup} from "./Popup.js";

export class PopupConfirmAction extends Popup {
    constructor(popupSelector, submitAction) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submit = submitAction;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleSubmit);
    }

    close() {
        this._form.removeEventListener('submit', this._handleSubmit);
        super.close();

    }

    _handleSubmit = () => {
        this._submit();
        this.close();
    }


}