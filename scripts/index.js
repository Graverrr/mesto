import {initialCards} from "./initialCards.js";
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";


const fullSizeImage = document.querySelector('.popup__image');

const profile = document.querySelector('.profile');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditForm = document.querySelector('.popup__container_type_edit');
const popupCards = document.querySelector('.popup_type_create');
const createCardForm = document.querySelector('.popup__container_type_create');
const popupImage = document.querySelector('.popup_type_image');
const popupOpenBtn = document.querySelector('.profile__btn-edit');
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
const newCardForm = new FormValidator(createCardForm, validationConfig);
const newEditForm = new FormValidator(popupEditForm, validationConfig);

const enableValidation = () =>{
  newEditForm.enableValidation();
  newCardForm.enableValidation();
}

function createCard(data){
  const card = new Card(data,'.cards-template').generateCard();
  return card
}

initialCards.forEach((item) => {
  const card =  createCard(item);
  document.querySelector('.cards__list').append(card);
})

function addNewCard(evt) {
  evt.preventDefault();
  const newCard = createCard({
    name: placeInput.value,
    link: linkInput.value
  })
  cardList.prepend(newCard);
  placeInput.value = '';
  linkInput.value = '';
  closePopup(popupCards);
  evt.target.reset();
}

function toggleLikeStatus (evt) {  
  evt.target.classList.toggle('card__btn-like_active');
}

export const openPopup = (popup) => {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', pressEsc)
  popup.addEventListener('mousedown', clickOverlay)
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', pressEsc)
  popup.removeEventListener('mousedown', clickOverlay)
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
  newCardForm.resetValidation()
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

enableValidation()
popupOpenBtn.addEventListener('click', openPopupEdit);
popupCloseBtn.addEventListener('click', () => closePopup(popupEdit));
popupAddCardBtn.addEventListener('click', openPopupCards);
popupCloseCardBtn.addEventListener('click', ()=> closePopup(popupCards));
popupEdit.addEventListener('submit', handleSubmitForm);
createCardForm.addEventListener("submit", addNewCard);
popupImageCloseBtn.addEventListener('click', closePopupImage);