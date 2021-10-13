
const showErrorMessage = (errorElement, inputElement, config) =>{
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
};

const hideErrorMessage = (errorElement, inputElement, config) =>{
  errorElement.textContent = '';
    inputElement.classList.remove(config.inputErrorClass);
};

const checkInputValidity = (formElement, inputElement, config) => {
  const isInputNotValid = !inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if(isInputNotValid) {
    showErrorMessage (errorElement, inputElement, config);
  } else{
    hideErrorMessage (errorElement, inputElement, config);
  }
};

const toggleButtonState = (button, isActive, config) => {
  if(isActive){
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
  }
}

const setEventListeners = (formElement, config) => {
  const inputsList = formElement.querySelectorAll(config.inputSelector);
  const submitButton = formElement.querySelector(config.submitButtonSelector);
  Array.from(inputsList).forEach(inputElement => {
    inputElement.addEventListener('input', (evt) => {
      const isFormValid = formElement.checkValidity()
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(submitButton, isFormValid, config)
    })
  })

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  })
};

const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  Array.from(forms).forEach(formElement => {
    setEventListeners(formElement, config);
  })
};

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_invalid',
  inputErrorClass: 'popup__input_state_invalid',
}; 

enableValidation(validationConfig);