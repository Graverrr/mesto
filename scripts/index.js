import {initialCards} from "./initialCards.js";
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

const profile = document.querySelector('.profile');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditForm = document.querySelector('.popup__container_type_create');
const popupCards = document.querySelector('.popup_type_create');
const createCardForm = document.querySelector('.popup__container_type_create');
const popupImage = document.querySelector('.popup_type_image');
const popupOpenBtn = document.querySelector('.profile__btn-edit');
const fullSizeImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupCloseBtn = document.querySelector('.popup__close_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__description');
const cardTemplate = document.querySelector('.cards-template');
const cardList = document.querySelector('.cards__list');
const cardsForm = document.querySelector('.cards__form');
const cardsImage = document.querySelector('.cards__image');
const popupAddCardBtn = document.querySelector('.profile__btn-add');
const popupCloseCardBtn = document.querySelector('.popup__close_cards');
const popupImageCloseBtn = document.querySelector('.popup__close_image');
const submitButton = popupCards.querySelector('.popup__btn-save');
const placeInput = popupCards.querySelector('.popup__input_type_place'); 
const linkInput = popupCards.querySelector('.popup__input_type_link');
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_invalid',
  inputErrorClass: 'popup__input_state_invalid',
};

initialCards.forEach((item) => {
  const card = new Card(item);
  const cardElement = card.generateCard();
  document.querySelector('.cards__list').append(cardElement);
})

const newCardForm = new FormValidator(createCardForm, validationConfig);
newCardForm.enableValidation();

const newEditForm = new FormValidator(popupEditForm, validationConfig);
newEditForm.enableValidation();

function addNewCard(evt) {
  evt.preventDefault();
  const place = placeInput.value;
  const link = linkInput.value;
  const card = new Card({name: place,link: link});
  cardList.prepend(card.generateCard());
  evt.target.reset();
  closePopup(popupCards);
}





function toggleLikeStatus (evt) {  
  evt.target.classList.toggle('card__btn-like_active');
}


const openPopup = (popup) => {
  popup.classList.add('popup_opened')
  window.addEventListener('keydown', pressEsc)
  popup.addEventListener('mousedown', clickOverlay)
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened')
  window.removeEventListener('keydown', pressEsc)
  popup.addEventListener('mousedown', clickOverlay)
}

const clickOverlay = (evt) => {
  if(evt.target.classList.contains('popup_opened')) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}

const pressEsc = (evt) => {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}

function openPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
  newEditForm.resetValidation();
}

function openPopupCards() {
  openPopup(popupCards);
}


function handleSubmitForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function closePopupImage() {
  closePopup(popupImage);
}

popupOpenBtn.addEventListener('click', openPopupEdit);
popupCloseBtn.addEventListener('click', () => closePopup(popupEdit));
popupAddCardBtn.addEventListener('click', openPopupCards);
popupCloseCardBtn.addEventListener('click', ()=> closePopup(popupCards));
popupEdit.addEventListener('submit', handleSubmitForm);
popupImageCloseBtn.addEventListener('click', closePopupImage);