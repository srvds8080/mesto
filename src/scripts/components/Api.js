export class Api {
    constructor(headers) {
        this.headers = headers;
    }

    getCard(urlCard) {
        return fetch(urlCard, this.headers)
            .then(res => res.json())
    }

    getUserData(urlUserData) {
        return fetch(urlUserData, this.headers)
            .then(res => res.json())
    }

    getAllData(urlCard, urlUserData) {
        return Promise.all([this.getCard(urlCard), this.getUserData(urlUserData)])
    }
}