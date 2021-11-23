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
const popupWithImage = new PopupWithImage(popupImage);
const userInfo = new UserInfo({profileName, profileJob});
const enableValidation = () =>{
  newEditForm.enableValidation();
  newCardForm.enableValidation();
}

enableValidation();



const handleCardClick = (link, name) => {
  popupWithImage.open(link, name);
};

const cardList = new Section({
  data: initialCards,
  renderer: (cardItem) => {
    сreateCard(cardItem);
  },
},
cardsList
);

cardList.renderItems();

function сreateCard(cardItem) {
  const card = new Card(cardItem, '.cards-template', handleCardClick);
  cardList.addItem(card.generateCard())
}

const openProfile = () => {
  const currentInfo = userInfo.getUserInfo();
  // nameInput.value = currentInfo.userName
  // jobInput.value = currentInfo.userJob
  popupEditForm.open()
}


popupWithImage.setEventListeners();


// const handleProfileSubmit = (data) => {

//   userInfo.setUserInfo(data['name'], data['job']);
//   popupEditForm.close();
// } 

// const editProfileForm = new PopupWithForm({
//   popup: popupEditForm,
//   handleFormSubmit: (data) => {
//     handleProfileSubmit(data);
//   }
// });

// editProfileForm.setEventListeners();

// const addCardForm = new PopupWithForm(createCardForm, cardFormSubmit);

// function cardFormSubmit(data){
//   сreateCard(data);
//   createCardForm.close()
//   newCardForm.resetValidation();
// }

// addCardForm.setEventListeners()

// const openCardForm = () => {
//   editProfileForm.open();
// }
// const openProfileForm = () => {
//   const currentUserInfo = userInfo.getUserInfo();
//   nameInput.value = currentUserInfo.name;
//   jobInput.value = currentUserInfo.job;
//   editProfileForm.open();
// }

popupOpenBtn.addEventListener('click', openProfile);
// popupAddCardBtn.addEventListener('click', openCardForm);