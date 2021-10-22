
 export default class Card {

   constructor(name, link) {
     this._name = name;
     this._link = link;
   }

   _getTemplate() {
     const cardTemplate = document
       .querySelector('.cards-template')
       .content
       .querySelector('.card')
       .cloneNode(true);
     return cardTemplate;
   }

   generateCard() {
     this._element = this._getTemplate();
     this._setEventListeners()
     const cardImage = this._element.querySelector('.card__image')
     cardImage.src = this._link;
     cardImage.alt = this._name;
     this._element.querySelector('.card__title').textContent = this._name;
     return this._element;
   }

   _setEventListeners() {
     this._element.querySelector('.card__btn-like').addEventListener('click', () => {
       this._toggleLikeStatus();
     });

     this._element.querySelector('.card__btn-delete').addEventListener('click', () => {
       this._deleteCard();
     });
     this._element.querySelector('.card__image').addEventListener('click', () => {
       this._handleOpenPopup();
     });
   }

   _deleteCard(){
     this._element.remove();
   }

   _toggleLikeStatus() {
     const like = this._element.querySelector('.card__btn-like');
     like.classList.toggle('card__btn-like_active')

   }

   _handleOpenPopup(){
     const popupImage = document.querySelector('.popup_type_image');

     popupImage.classList.add('popup_opened');

     const popupImg = document.querySelector('.popup__image');
     popupImg.src = this._link;
     popupImg.alt = this._name;
     document.querySelector('.popup__title').textContent = this._name;
     }
 }

 initialCards.forEach((item) => {
   const card = new Card(item.name, item.link);
   const cardElement = card.generateCard();
   document.querySelector('.cards__list').append(cardElement);
 })


