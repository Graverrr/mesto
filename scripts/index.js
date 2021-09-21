const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__btn-edit');
const popupCloseBtn = popup.querySelector('.popup__close');
let form = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');

function popupOpen() {
  popup.classList.add('popup__opened')
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};
function popupClose() {
  popup.classList.remove('popup__opened')
};

function clickOverlay(event){
  if (event.target === event.currentTarget) {
    popupClose()
  }
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose()
}

form.addEventListener('submit', formSubmitHandler);
popup.addEventListener('click', clickOverlay)
popupOpenBtn.addEventListener('click', popupOpen);
popupCloseBtn.addEventListener('click', popupClose);