class UserInfo  {
  constructor({name, job}){
    this._name = name;
    this._job = job;
  }

  setUserInfo({name, job}){
    this._name = name;
    this._description = job;
  }
  getUserInfo(){
    const data = {};
    data.userName = this._name.textContent;
    data.userJob = this._job.textContent;
    return data;
  }

  updateUserInfo(){
    this._name.textContent = userName;
    this._job.textContent = userJob;
  }
}

export {UserInfo}