const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__btn-edit');
const popupCloseBtn = popup.querySelector('.popup__close');
let form = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('.popup__info_type_name');
let jobInput = popup.querySelector('.popup__info_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup__opened');
};
function closePopup() {
  popup.classList.remove('popup__opened');
};

function clickOverlay(event){
  if (event.target === event.currentTarget) {
    closePopup();
  }
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

form.addEventListener('submit', formSubmitHandler);
popup.addEventListener('click', clickOverlay)
popupOpenBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);