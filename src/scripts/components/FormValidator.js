export default class FormValidator {
  constructor (formElement, config) {
    this._formElement = formElement;
    this._config = config;
    this._submitButton = formElement.querySelector(this._config.submitButtonSelector);
    this._inputsList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
  }

  _showErrorMessage = (errorElement, inputElement) =>{
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
  }

  _hideErrorMessage = (errorElement, inputElement) =>{
    errorElement.textContent = '';
    inputElement.classList.remove(this._config.inputErrorClass);
  };

  _checkInputValidity = (inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    if(isInputNotValid) {
      this._showErrorMessage (errorElement, inputElement);
    } else{
      this._hideErrorMessage (errorElement, inputElement);
    }
  };


  _toggleButtonState =  (isActive) =>{
    if(isActive){
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.disabled = 'disabled';
    }
  };

  _setEventListeners = () => {
    const isFormValid = this._formElement.checkValidity();
    this._toggleButtonState(isFormValid);
    Array.from(this._inputsList).forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        const isFormValid = this._formElement.checkValidity();
        this._checkInputValidity(inputElement);
        this._toggleButtonState(isFormValid);
      })
    });
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._toggleButtonState(false);
    })
  };
  resetValidation() {
    this._toggleButtonState();
    this._inputsList.forEach(inputElement => {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      this._hideErrorMessage(errorElement, inputElement);

    });
  }

  enableValidation = () => {
    this._setEventListeners();
  }

}