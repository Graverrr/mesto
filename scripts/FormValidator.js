class FormValidator {
  constructor (formElement, config) {
    this._formElement = formElement;
    this._config = config;
    this._submitButton = formElement.querySelector(this._config.submitButtonSelector);
  }

  _showErrorMessage = (errorElement, inputElement, config) =>{
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass);
  }

  _hideErrorMessage = (errorElement, inputElement, config) =>{
    errorElement.textContent = '';
    inputElement.classList.remove(config.inputErrorClass);
  };

  _checkInputValidity = (formElement, inputElement, config) => {
    const isInputNotValid = !inputElement.validity.valid;
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    if(isInputNotValid) {
      this._showErrorMessage (errorElement, inputElement, config);
    } else{
      this._hideErrorMessage (errorElement, inputElement, config);
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
    const inputsList = this._formElement.querySelectorAll(this._config.inputSelector);
    const submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    Array.from(inputsList).forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        const isFormValid = this._formElement.checkValidity();
        this._checkInputValidity(this._formElement, inputElement, this._config);
        this._toggleButtonState(submitButton, this._config)
      })
    });
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
  };

  enableValidation = () => {
    this._setEventListeners();
  }

}

export {FormValidator};







