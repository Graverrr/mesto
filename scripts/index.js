const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile');
const popupEdit = document.querySelector('.popup_type_edit');
const popupCards = document.querySelector('.popup_type_create');
const popupImage = document.querySelector('.popup_type_image');
const popupOpenBtn = document.querySelector('.profile__btn-edit');
const fullSizeImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupCloseBtn = popup.querySelector('.popup__close_edit');
const nameInput = popup.querySelector('.popup__info_type_name');
const jobInput = popup.querySelector('.popup__info_type_job');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__description');
const cardTemplate = document.querySelector('.cards-template');
const cardList = document.querySelector('.cards__list');
const cardsForm = document.querySelector('.cards__form');
const cardsImage = document.querySelector('.cards__image');
const popupAddCardBtn = document.querySelector('.profile__btn-add');
const popupCloseCardBtn = document.querySelector('.popup__close_cards');
const popupImageCloseBtn = document.querySelector('.popup__close_image'); 
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
  card.querySelector('.card__title').textContent = item.name;
  card.querySelector('.card__image').src = item.link;
  card.querySelector('.card__image').alt = item.name;
  card.querySelector('.card__btn-delete').addEventListener('click', deleteCard);
  card.querySelector('.card__btn-like').addEventListener('click', toggleLikeStatus);
  card.querySelector('.card__image').addEventListener('click', openPopupImage);
  return card;
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
  evt.preventDefault();
  const nameInput = evt.currentTarget.querySelector ('.popup__info_type_name').value; 
  const linkInput = evt.currentTarget.querySelector ('.popup__info_type_link').value;
  const newInitialCards = createCard ({name: nameInput,link: linkInput});
  cardList.prepend(newInitialCards);
  evt.target.reset();
  togglePopup(popupCards);
}



function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}
function togglePopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  togglePopup(popupEdit)
}
function togglePopupCards() {
  togglePopup(popupCards);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopupEdit();
}

popupOpenBtn.addEventListener('click', togglePopupEdit);
popupCloseBtn.addEventListener('click', togglePopupEdit);
popupAddCardBtn.addEventListener('click', togglePopupCards);
popupCloseCardBtn.addEventListener('click', togglePopupCards);
popupEdit.addEventListener('submit', formSubmitHandler);
popupCards.addEventListener('submit',addNewCard);

function openPopupImage(evt) {
  const link = evt.target.currentSrc;
  const title = evt.currentTarget.nextElementSibling.innerText;
  fullSizeImage.src = link; 
  
  popupImageTitle.innerText = title;
  togglePopup(popupImage);  
}

function closePopupImage() {
  togglePopup(popupImage);
}


popupImageCloseBtn.addEventListener("click", closePopupImage);