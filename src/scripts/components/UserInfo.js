export default class UserInfo  {

  constructor({name,job}) {
    this._name = name;
    this._job = job
  }

  setUserInfo = (newName,newJob) => {
    this._name.textContent = newName;
    this._job.textContent = newJob;
  }

  getUserInfo() {
    const data = {};
    data.name = this._name.textContent;
    data.job = this._job.textContent
    return data
  }
}