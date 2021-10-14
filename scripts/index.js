const profile = document.querySelector('.profile');
const popupEdit = document.querySelector('.popup_type_edit');
const popupCards = document.querySelector('.popup_type_create');
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
const initialCards = [
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

function createCard (item) {
  const card = cardTemplate.content.cloneNode(true);
  const cardName = item.name;
  card.querySelector('.card__title').textContent = cardName;
  card.querySelector('.card__image').src = item.link;
  card.querySelector('.card__image').alt = cardName;
  card.querySelector('.card__btn-delete').addEventListener('click', deleteCard);
  card.querySelector('.card__btn-like').addEventListener('click', toggleLikeStatus);
  card.querySelector('.card__image').addEventListener('click', () => openFullscreenPopup(item.link, cardName));
  const openFullscreenPopup = (link, name) => { 
    popupImageTitle.textContent = name; 
    fullSizeImage.alt = name; 
    fullSizeImage.src =  link;
    openPopup(popupImage); 
  } 
  
  return card;
}

const disabledSubmitButton = () => {
  submitButton.setAttribute('disabled', true);
  submitButton.classList.add('popup__btn-save_invalid');
}

function deleteCard(evt){
  evt.target.closest('.card').remove();
}

function renderCards(initialCards) {
  const card = initialCards.map(createCard);
  cardList.append(...card);
}

renderCards(initialCards);

function toggleLikeStatus (evt) {  
  evt.target.classList.toggle('card__btn-like_active');
}

function addNewCard(evt) {
  const place = placeInput.value;
  const link = linkInput.value;
  evt.preventDefault();
  const newInitialCards = createCard({name: place,link: link});
  cardList.prepend(newInitialCards);
  evt.target.reset();
  closePopup(popupCards);
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
  openPopup(popupEdit)
}

function openPopupCards() {
  disabledSubmitButton();
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
popupCards.addEventListener('submit',addNewCard);
popupImageCloseBtn.addEventListener('click', closePopupImage);