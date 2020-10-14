export class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems(items, userId) {
        items.forEach((item) => {
            this.addItem(this._renderer(item, userId), true);
        });
    }

    addItem(element, isArray) {
        if (isArray) {
            this._container.append(element);
        } else {
            this._container.prepend(element);
        }
    }
}