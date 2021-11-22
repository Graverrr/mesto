import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import Section from './components/Section.js';
import {
  initialCards,
  cardsList,
  nameInput,
  jobInput,
  popupOpenBtn,
  popupAddCardBtn,
  popupEditForm,
  createCardForm,
  validationConfig,
  profileName,
  profileJob,
  popupImage
} from './utils/constants.js';
import '../pages/index.css'

const newCardForm = new FormValidator(createCardForm, validationConfig);
const newEditForm = new FormValidator(popupEditForm, validationConfig);
const userInfo = new UserInfo({name: profileName, job: profileJob});
const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

const enableValidation = () =>{
  newEditForm.enableValidation();
  newCardForm.enableValidation();
}
enableValidation();

const handleCardClick = ({link, name}) => {
  popupWithImage.open({link, name});
  popupWithImage.setEventListeners();
};

function сreateCard(cardItem) {
  const card = new Card(cardItem, '.cards-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
    data: initialCards,
    renderer: (cardItem) => {
      const cardElement = сreateCard(cardItem);
      cardList.addItem(cardElement);
    },
  },
  cardsList
);

cardList.renderItems();


const handleProfileSubmit = (data) => {

  userInfo.setUserInfo(data['name'], data['job']);
  popupEditForm.close();
} 

const editProfileForm = new PopupWithForm({
  popup: popupEditForm,
  handleFormSubmit: (data) => {
    handleProfileSubmit(data);
  }
});

editProfileForm.setEventListeners();

const addCardForm = new PopupWithForm({
  popup: createCardForm,
  handleFormSubmit: (item) => {
    
    const newCard = сreateCard(item);
    cardList.addCardItem(newCard);
  
    addCardForm.close();
  }
  
});

addCardForm.setEventListeners();

const openCardForm = () => {
  editProfileForm.open();
}
const openProfileForm = () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.name;
  jobInput.value = currentUserInfo.job;
  editProfileForm.open();
}

popupOpenBtn.addEventListener('click', openProfileForm);
popupAddCardBtn.addEventListener('click', openCardForm);