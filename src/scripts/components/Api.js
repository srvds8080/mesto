export class Api {
    constructor(authorization, contentType) {
        this.headers = {authorization: authorization, "Content-Type": contentType}
    }

    getCard(urlCard) {
        return fetch(urlCard, {
            method: "GET",
            headers: this.headers
        })
            .then(res => res.json())
    }

    getUserData(urlUserData) {
        return fetch(urlUserData, {
            method: "GET",
            headers: this.headers
        })
            .then(res => res.json())
    }

    getAllData(urlCard, urlUserData) {
        return Promise.all([this.getCard(urlCard), this.getUserData(urlUserData)])
    }

    changeUserData(url, data) {
        return fetch(url,
            {
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then((res) => {
                return res.json()
            })
            .catch((error) => {
                return console.log(error)
            })
    }
    addCard(url, data) {
        return fetch(url,
            {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then((res) => {
                return res.json()
            })
            .catch((error) => {
                return console.log(error)
            })
    }
    deleteCard(url, idCard) {
        return fetch(`${url}/${idCard}`,
            {
                method: "DELETE",
                headers: this.headers,
            })
            .then((res) => {
                return res.json()
            })
            .catch((error) => {
                return console.log(error)
            })
    }
}