import {Popup} from './Popup.js';

export class PopupWithSubmit extends Popup {

  constructor(popup) {
    super(popup);
    this._form = document.querySelector('.popup__container_type_delete');
    this._submitButton = this._popup.querySelector('.popup__btn-save')
  }
  setActionSubmit(action){
    this.handleSubmit = action;
  }

  isLoading(isLoading) {
    if(isLoading) {
        this._submitButton.textContent = 'Сохранение...';
    } else {
        this._submitButton.textContent = this._submitButton.textContent.slice(0, -3);
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleSubmit()

    })
  }


  

}