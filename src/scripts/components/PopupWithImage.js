import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imgPreview = this._popup.querySelector('.popup__img-preview');
    }

    open(name, link) {
        super.open();
        this._imgPreview.src = link;
        this._imgPreview.alt = name;
    }
}