class UserInfo  {
  constructor({name, about, avatar}){
    this._name = name;
    this._about = about;
    this._avatar = avatar;
  }

  setUserInfo({name, about} ) {
    this._name.textContent = name;
    this._about.textContent = about;
  }

  getUserInfo(){
    const data = {};
    data.name = this._name.textContent;
    data.about = this._about.textContent;
    return data;
  }

  setAvatar({avatar}){
    this._avatar.src = avatar;
  }
}

export {UserInfo}