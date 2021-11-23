export default class UserInfo  {

  constructor({name, job}){
    this._name = name;
    this._job = job;

  }

  getUserInfo() {
    const data = {};

    userName = this._name.textContent;
    userJob = this._job.textContent;
    return data;  
  }

  setUserInfo( userName, userJob ) {
    this._name.textContent = userName;
    this._job.textContent = userJob;
  }
}