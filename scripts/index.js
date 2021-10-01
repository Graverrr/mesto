const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile')
const popupEdit = document.querySelector('.popup__container_type_edit');
const popupOpenBtn = document.querySelector('.profile__btn-edit');
const popupCloseBtn = popup.querySelector('.popup__close');
let form = popupEdit.querySelector('.popup__container');
const popupCards = popup.querySelector('.popup__container_type_create')
let nameInput = popup.querySelector('.popup__info_type_name');
let jobInput = popup.querySelector('.popup__info_type_job');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__description');
const cardTemplate = document.querySelector('.cards-template');
const cardList = document.querySelector('.cards__list');
const cardsForm = document.querySelector('.cards__form');
const popupAddCardOpenBtn = document.querySelector('.profile__btn-add');
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

function renderCard (title, src, alt) {
  const card = cardTemplate.content.cloneNode(true);;
  card.querySelector('.card__title').textContent = title;
  card.querySelector('.card__image').src = src;
  card.querySelector('.card__image').alt = title;
  cardList.prepend(card)
}



function cardCreate (){
  let card = cardTemplate.content.cloneNode(true);
  for (i=0; i< initialCards.length; i++){
    renderCard(initialCards[i].name, initialCards[i].link)
  }
};
cardCreate();
function popupCardsToggle() {
  popupCards.classList.toggle("popup_opened");
}


popupAddCardOpenBtn.addEventListener("click", popupCardsToggle);

function popupEditToggle() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupEdit.classList.toggle('popup_opened');
};
function closePopup() {
  popup.classList.remove('popup_opened');
};

// функция закрытия попапа кликом по оверлею
function clickOverlay(event){
  if (event.target === event.currentTarget) {
    popupEditToggle()
  }
};
// отправка данных в форму инпута
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupEditToggle();
};

popupEdit.addEventListener('submit', formSubmitHandler);
popup.addEventListener('click', clickOverlay);
popupOpenBtn.addEventListener('click', popupEditToggle);
popupCloseBtn.addEventListener('click', popupEditToggle);