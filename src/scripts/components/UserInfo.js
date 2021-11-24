class UserInfo  {
  constructor({name, job}){
    this._name = name;
    this._job = job;
  }

  setUserInfo(userName, userJob ) {
    this._name.textContent = userName;
    this._job.textContent = userJob;
  }

  getUserInfo(){
    const data = {};
    data.userName = this._name.textContent;
    data.userJob = this._job.textContent;
    return data;
  }
}

export {UserInfo}