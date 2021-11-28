import {Popup} from './Popup.js';

export class PopupWithSubmit extends Popup {

  constructor(popup) {
    super(popup);
    this._form = document.querySelector('.popup__container_type_delete')
  }
  setActionSubmit(action){
    this.handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleSubmit()

    })
  }


  

}