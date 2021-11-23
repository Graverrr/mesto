export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  
export const fullSizeImage = document.querySelector('.popup__image');

export const profile = document.querySelector('.profile');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupEditForm = document.querySelector('.popup__container_type_edit');
export const popupCards = document.querySelector('.popup_type_create');
export const createCardForm = document.querySelector('.popup__container_type_create');
export const popupImage = document.querySelector('.popup_type_image');
export const popupOpenBtn = document.querySelector('.profile__btn-edit');
export const popupImageTitle = document.querySelector('.popup__image-title');
export const popupCloseBtn = document.querySelector('.popup__close_edit');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const profileName = profile.querySelector('.profile__name');
export const profileJob = profile.querySelector('.profile__description');
export const cardTemplate = document.querySelector('.cards-template');
export const cardsList = document.querySelector('.cards__list')
export const cardsForm = document.querySelector('.cards__form');
export const cardsImage = document.querySelector('.cards__image');
export const popupAddCardBtn = document.querySelector('.profile__btn-add');
export const popupCloseCardBtn = document.querySelector('.popup__close_cards');
export const popupImageCloseBtn = document.querySelector('.popup__close_image');
export const submitButton = popupCards.querySelector('.popup__btn-save');
export const placeInput = popupCards.querySelector('.popup__input_type_place'); 
export const linkInput = popupCards.querySelector('.popup__input_type_link');
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_invalid',
  inputErrorClass: 'popup__input_state_invalid',
};