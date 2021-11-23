export default class Card {
  constructor(data, selector, handleCardClick){
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._selector)
      .content
      .querySelector('.card')
      .cloneNode(true);
      
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.card__image');
    this._elementTitle = this._element.querySelector('.card__title').textContent = this._name;
    this._elementLikeButton = this._element.querySelector('card__btn-like');
    this._elementDelButton = this._element.querySelector('card__btn-delete');
    this._imgPreview = this._element.querySelector('popup__image');
    this._elementImage.src = this._link;
    this._elementImage = this._name;
    this._setEventListeners()
    return this._element;
  }

  _setEventListeners() {
    // this._elementLikeButton.addEventListener('click', () => {
    //   this._toggleLikeStatus();
    // });
    // this._elementDelButton.addEventListener('click', () => {
    //   this._deleteCard();
    // });
    // this._elementImage.addEventListener('click', () => {
    //   this._handleCardClick(this._link, this._name);
    // });
  }

  _deleteCard(){
    this._element.remove();
  }

  _toggleLikeStatus() {
    
    this._elementLikeButton.classList.toggle('card__btn-like_active')
  }
 }



