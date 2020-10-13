export class UserInfo {
    constructor({name, about, avatar}, api) {
        this._name = name;
        this._description = about;
        this._avatar = avatar;
        this._api = api;
    }

    getUserInfo() {
        this._userDataInput = {
            name: this._name.textContent,
            about: this._description.textContent
        }
        return this._userDataInput;
    }

    setUserInfo({name, about, avatar}) {
        if(avatar) {
            this._avatar.src = avatar;
            this._name.textContent = name;
            this._description.textContent = about;
        } else {
            this._name.textContent = name;
            this._description.textContent = about;
        }
    }

    changeUserInfo({name, about}, url) {
        this._api.changeUserData(url, {name, about})

        this.setUserInfo({name, about})
    }
}