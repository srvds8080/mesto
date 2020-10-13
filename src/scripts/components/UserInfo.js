export class UserInfo {
    constructor({name, about}) {
        this._name = name;
        this._description = about;
    }

    getUserInfo() {
        this._userDataInput = {
            name: this._name.textContent,
            description: this._description.textContent
        }
        return this._userDataInput;
    }

    setUserInfo({name, about}) {
        this._name.textContent = name;
        this._description.textContent = about;
    }
}