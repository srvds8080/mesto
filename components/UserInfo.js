export class UserInfo {
    constructor({userName, userDescription}) {
        this._name = userName;
        this._description = userDescription;
    }

    getUserInfo() {
        this._userDataInput = {
            name: this._name.textContent,
            description: this._description.textContent
        }
        return this._userDataInput;
    }

    setUserInfo({name, description}) {
        this._name.textContent = name;
        this._description.textContent = description;
    }
}