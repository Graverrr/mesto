


// формы
export const popupEditForm = document.querySelector('.popup__container_type_edit');
export const createCardForm = document.querySelector('.popup__container_type_create');
export const editAvatarForm = document.querySelector('.popup__container_type_edit_avatar')
export const cardsForm = document.querySelector('.cards__form');
export const cardDeleteForm = document.querySelector('.popup__container_type_delete')
// попапы
export const popupImage = document.querySelector('.popup_type_image');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupCards = document.querySelector('.popup_type_create');
export const popupAvatar = document.querySelector('.popup_type_edit_avatar');
export const popupCardDelete = document.querySelector('.popup_type_delete');
//инпуты

export const placeInput = popupCards.querySelector('.popup__input_type_place'); 
export const linkInput = popupCards.querySelector('.popup__input_type_link');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');


//кнопки
export const popupOpenBtn = document.querySelector('.profile__btn-edit');
export const popupCloseBtn = document.querySelector('.popup__close_edit');
export const popupAvatarOpenBtn = document.querySelector('.profile__avatar-btn')
export const popupAvatarCloseBtn = document.querySelector('.popup__close_avatar')
export const popupAddCardBtn = document.querySelector('.profile__btn-add');
export const popupCloseCardBtn = document.querySelector('.popup__close_cards');
export const popupImageCloseBtn = document.querySelector('.popup__close_image');
export const submitButton = popupCards.querySelector('.popup__btn-save');

//остальное

export const profile = document.querySelector('.profile');
export const profileName = profile.querySelector('.profile__name');
export const profileJob = profile.querySelector('.profile__description');
export const profileAvatar = document.querySelector('.profile__avatar')
export const fullSizeImage = document.querySelector('.popup__image');
export const cardTemplate = document.querySelector('.cards-template');
export const cardsList = document.querySelector('.cards__list')
export const cardsImage = document.querySelector('.cards__image');
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_invalid',
  inputErrorClass: 'popup__input_state_invalid',
};