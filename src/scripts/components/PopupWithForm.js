import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popup, handleFormSubmit}) {
      super(popup)
      this.handleFormSubmit = handleFormSubmit;
      this._form = this._popup.querySelector('.popup__form');
      this._inputList = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
      
      this._formValues = {};
      this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
      });
      return this._formValues;

  }
  handleSubmit = (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this.handleFormSubmit(inputValues);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () =>{
      this._handleSubmit(this._getInputValues());
    });

  }

  close() {
    super.close();
    this._form.reset();
  }

}
