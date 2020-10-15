export class Api {
    constructor(authorization, contentType) {
        this.headers = {authorization: authorization, "Content-Type": contentType}
    }

    getCard(urlCard) {
        return fetch(urlCard, {
            method: "GET",
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.statusText}`)
            })
    }

    getUserData(urlUserData) {
        return fetch(urlUserData, {
            method: "GET",
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.statusText}`)
            })
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
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.statusText}`)
            })
    }

    changeUserAvatar(url, data) {
        return fetch(url,
            {
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then(res => {
                 if (res.ok) {
                    return res.json();
                }
                 return Promise.reject(`Ошибка: ${res.statusText}`)
            })
}

    addCard(url, data) {
        return fetch(url,
            {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.statusText}`)
            })
    }

    deleteCard(url, idCard) {
        return fetch(`${url}/${idCard}`,
            {
                method: "DELETE",
                headers: this.headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.statusText}`)
            })
    }

    checkLikeCard(url, idCard) {
        return fetch(`${url}/likes/${idCard}`,
            {
                method: "PUT",
                headers: this.headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.statusText}`)
            })
    }

    removeLikeCard(url, idCard) {
        return fetch(`${url}/likes/${idCard}`,
            {
                method: "DELETE",
                headers: this.headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.statusText}`)
            })
    }
}