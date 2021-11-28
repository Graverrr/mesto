function onResponse(res){
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};


export class Api {
  constructor({url, headers}){
    this._url = url;
    this._headers = headers;
  };

  getCards(){
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then(onResponse)
  };

  addCard(data){
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(onResponse)
  }

  deleteCard(cardId){
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(onResponse)
  }

  getUserInfo(){
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(onResponse)
  }

  editUserInfo(data){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(onResponse)
  
  }

  editUserAvatar(data){
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    })
      .then(this._checkResponse);
  }

  setCardLike(cardId){
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(onResponse)
  }

  removeCardLike(cardId){
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(onResponse)
  }


}