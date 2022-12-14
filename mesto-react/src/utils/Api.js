export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._token = options.headers.authorization;
    this._headers = options.headers;
  }

  _getMethod(addString) {
    return fetch(`${this._baseUrl}${addString}`, {
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  _patchPostMethod(addString, method, jsonObject) {
    return fetch(`${this._baseUrl}${addString}`, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(jsonObject),
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
    }
    

  getUserInfo() {
    return this._getMethod("/users/me");
  }

  getCardsArray() {
    return this._getMethod("/cards");
  }

  patchUserAvatar(userData) {
    return this._patchPostMethod("/users/me/avatar", "PATCH", userData);
  }

  patchUserInfo(userData) {
    return this._patchPostMethod("/users/me", "PATCH", userData);
  }

  postCardData(cardData) {
    return this._patchPostMethod("/cards", "POST", cardData);
  }

  deleteCard(cardId) {
    return this._patchPostMethod(`/cards/${cardId}`, "DELETE", {});
  }

  toggleLike(cardId, isLiked){
    if (!isLiked) {
      return this._patchPostMethod(`/cards/${cardId}/likes`, "PUT", {});
    } else {
      return this._patchPostMethod(`/cards/${cardId}/likes`, "DELETE", {});
    }
  }


  // setLike(cardId) {
  //   return this._patchPostMethod(`/cards/${cardId}/likes`, "PUT", {});
  // }

  // deleteLike(cardId) {
  //   return this._patchPostMethod(`/cards/${cardId}/likes`, "DELETE", {});
  // }

}

export const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-44",
  headers: {
    authorization: "9d5eb0d3-fb55-4a88-9fe1-f4f0f3428bab",
    "Content-Type": "application/json",
  },
})

// {
//   baseUrl: "https://mesto.nomoreparties.co/v1/cohort-44",
//   headers: {
//     authorization: "9d5eb0d3-fb55-4a88-9fe1-f4f0f3428bab",
//     "Content-Type": "application/json",
//   },
// };