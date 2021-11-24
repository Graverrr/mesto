import {Card} from '../scripts/components/Card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import {PopupWithImage} from '../scripts/components/PopupWithImage.js';
import {PopupWithForm} from '../scripts/components/PopupWithForm.js';
import {UserInfo} from '../scripts/components/UserInfo.js';
import {Section} from '../scripts/components/Section.js';
import {
  initialCards,
  cardsList,
  nameInput,
  jobInput,
  popupOpenBtn,
  popupAddCardBtn,
  popupEdit,
  popupEditForm,
  createCardForm,
  popupCards,
  validationConfig,
  profileName,
  profileJob,
  popupImage
} from '../scripts/utils/constants.js';
import '../pages/index.css'

const userInfo = new UserInfo({name: profileName, job: profileJob});
const editFormValidation = new FormValidator(validationConfig, popupEditForm);
const cardFormValidation = new FormValidator(validationConfig, createCardForm);
const popupImg = new PopupWithImage(popupImage);
popupImg.setEventListeners();
cardFormValidation.enableValidation();
editFormValidation.enableValidation();
const createCard = (item) => {
  const card = new Card({
    data: item,
    handleCardClick: () => {
      popupImg.open({data: item});
    }
  }, 
    '.cards-template'
  );
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards, 
  renderer: (item) => { 
    const element = createCard(item); 
    cardList.addItem(element); 
    } 
  }, 
  cardsList 
); 

cardList.renderItems(); 

const newProfileForm = new PopupWithForm({
  popup: popupEdit,
  handleFormSubmit: (data) => {
  handleProfileSubmit(data);
  }
});
newProfileForm.setEventListeners();

const newCardForm = new PopupWithForm({
  popup: popupCards,
  handleFormSubmit: (item) => {
    const newCard = createCard(item);
    cardList.addItem(newCard);
    newCardForm.close();
  }
});
newCardForm.setEventListeners();

const openPopupForm = () => {
  cardFormValidation.resetValidation()
  newCardForm.open();
}

const openPopupProfile = () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.userName;
  jobInput.value = currentUserInfo.userJob;
  editFormValidation.resetValidation()
  newProfileForm.open();
}

const handleProfileSubmit = (data) => {
  userInfo.setUserInfo(data['name'], data['job']);
  newProfileForm.close();
} 

popupOpenBtn.addEventListener('click', openPopupProfile);
popupAddCardBtn.addEventListener('click', openPopupForm);