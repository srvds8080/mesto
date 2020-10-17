export class UserInfo {
    constructor({name, about, avatar}, api) {
        this._name = name;
        this._description = about;
        this._avatar = avatar;
    }

    getUserInfo() {
        this._userDataInput = {
            name: this._name.textContent,
            about: this._description.textContent
        }
        return this._userDataInput;
    }

    setUserInfo({name, about, avatar}) {
        if (avatar) {
            this._avatar.src = avatar;
        }
        this._name.textContent = name;
        this._description.textContent = about;
    }
}