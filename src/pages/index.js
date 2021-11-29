import {Card} from '../scripts/components/Card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import {PopupWithImage} from '../scripts/components/PopupWithImage.js';
import {PopupWithForm} from '../scripts/components/PopupWithForm.js';
import {PopupWithSubmit} from '../scripts/components/PopupWithSubmit.js'
import {UserInfo} from '../scripts/components/UserInfo.js';
import {Section} from '../scripts/components/Section.js';
import {Api} from '../scripts/components/Api.js'
import {
  editAvatarForm,
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
  profileAvatar,
  popupAvatar,
  popupImage,
  popupAvatarOpenBtn,
  popupCardDelete,
  cardDeleteForm
} from '../scripts/utils/constants.js';
import '../pages/index.css'

let userId = null;
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-30',
  headers: {
    authorization: '393f55a6-facd-471e-810d-9dbb80d703da',
    'Content-Type': 'application/json'
  }
});


Promise.all([api.getCards(), api.getUserInfo()])
  .then(([dataCards, dataUser]) => {
    userId = dataUser._id
    userInfo.setUserInfo(dataUser);
    userInfo.setAvatar(dataUser);
    cardList.renderItems(dataCards);
  })
  .catch((err) => {
    console.log(err);
  })

const userInfo = new UserInfo({name: profileName, about: profileJob, avatar: profileAvatar});
const editFormValidation = new FormValidator(validationConfig, popupEditForm);
const cardFormValidation = new FormValidator(validationConfig, createCardForm);
const avatarFormValidation = new FormValidator(validationConfig, editAvatarForm);
const popupImg = new PopupWithImage(popupImage);
const popupDelete = new PopupWithSubmit(popupCardDelete)
popupDelete.setEventListeners()
popupImg.setEventListeners();
cardFormValidation.enableValidation();
editFormValidation.enableValidation();
avatarFormValidation.enableValidation()
const createCard = (data) => {
  const card = new Card({
    data: {...data, currentUserId: userId},
    handleCardClick: () => {
      popupImg.open({data});
    },
    handleLikeClick: (card) =>{
      if(card.isLiked()){
        api.removeCardLike(card.id)
          .then(dataCard => card.setLikes(dataCard.likes))
          .catch((err) => {
            console.log(err);
          })
      }
      api.setCardLike(card.id)
          .then(dataCard => card.setLikes(dataCard.likes))
          .catch((err) => {
            console.log(err);
          })
    },
    handleCardDelete: (card) =>{
      popupDelete.open();
      popupDelete.setActionSubmit(()=>{
        popupDelete.isLoading(true)
        api.deleteCard(card.id)
          .then(()=>{
            popupDelete.close();
            card.deleteCard()
          })
          .catch(err => console.log(err))
          .finally(() => {
            popupDelete.isLoading(false);
          })
      })
    }}
  , 
    '.cards-template'
  );
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  renderer: (data) => { 
    const element = createCard(data);
    cardList.addItem(element); 
    } 
  }, 
  cardsList 
); 



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
    newCardForm.isLoading(true);
    api.addCard(item)
      .then((item) => {
        cardList.addItem(createCard(item), false);
        newCardForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        
        newCardForm.isLoading(false);
      })
    
  }
  
});
newCardForm.setEventListeners();

const newAvatarForm = new PopupWithForm({
  popup: popupAvatar,
  handleFormSubmit: (data) => {
    newAvatarForm.isLoading(true);
    api.editUserAvatar(data)
      .then((data) => {
        console.log(data)
        userInfo.setAvatar(data);
        newAvatarForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        newAvatarForm.isLoading(false);
      })
  }
});
newAvatarForm.setEventListeners();

const openPopupForm = () => {
  cardFormValidation.resetValidation()
  newCardForm.open();
}

const openAvatarForm = () =>{
  newAvatarForm.open()
  
  avatarFormValidation.resetValidation();
}

const openPopupProfile = () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.name;
  jobInput.value = currentUserInfo.about;
  editFormValidation.resetValidation()
  newProfileForm.open();
}

const handleProfileSubmit = (data) => {
  api.editUserInfo({
    name: data.name,
    about: data.about
  })
    .then( (data) =>  {
      userInfo.setUserInfo(data)
      newProfileForm.close();
    }
      )
    .catch((err) =>{
      console.log(err)
    })
  
} 

popupAvatarOpenBtn.addEventListener('click', openAvatarForm);
popupOpenBtn.addEventListener('click', openPopupProfile);
popupAddCardBtn.addEventListener('click', openPopupForm);