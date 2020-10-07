export class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems() {
        this._items.forEach((item) => {
            this.addItem(this._renderer(item), true);
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