class FormValidator {
  constructor (formElement, config) {
    this._formElement = formElement;
    this._config = config;
  }

  // показ ошибки
  _showErrorMessage = (errorElement, inputElement, config) =>{
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass);
  }

  _hideErrorMessage = (errorElement, inputElement, config) =>{
    errorElement.textContent = '';
    inputElement.classList.remove(config.inputErrorClass);
  };

  //  проверка на ошибку
  _checkInputValidity = (formElement, inputElement, config) => {
    const isInputNotValid = !inputElement.validity.valid;
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    if(isInputNotValid) {
      this._showErrorMessage (errorElement, inputElement, config);
    } else{
      this._hideErrorMessage (errorElement, inputElement, config);
    }
  };

  _toggleButtonState = (button, isActive, config) => {
    if(isActive){
      button.classList.remove(this._config.inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(this._config.inactiveButtonClass);
      button.disabled = true;
    }
  };

  _setEventListeners = (formElement, config) => {
    const inputsList = this._formElement.querySelectorAll(config.inputSelector);
    const submitButton = this._formElement.querySelector(config.submitButtonSelector);
    Array.from(inputsList).forEach(inputElement => {
      inputElement.addEventListener('input', (evt) => {
        const isFormValid = this._formElement.checkValidity()
        this._checkInputValidity(formElement, inputElement, config);
        this._toggleButtonState(submitButton, isFormValid, config)
      })
    });
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
  };

  enableValidation = (config) => {
    const form = this._formElement;
    this._setEventListeners(form, this.config);
  }

}

export {FormValidator};







