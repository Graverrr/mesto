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
    this._cardImage = this._element.querySelector('.card__image')
    this._cardImage.src = this._link;
    this._cardImage = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    this._setEventListeners()
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__btn-like').addEventListener('click', () => {
      this._toggleLikeStatus();
    });
    this._element.querySelector('.card__btn-delete').addEventListener('click', () => {
      this._deleteCard();
    });
    // this._cardImage.addEventListener('click', () => {
    //   this._handleCardClick({link: this._link , name: this._name});
    // });
  }

  _deleteCard(){
    this._element.remove();
  }

  _toggleLikeStatus() {
    const like = this._element.querySelector('.card__btn-like');
    like.classList.toggle('card__btn-like_active')
  }
 }



