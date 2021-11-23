class Card {
  constructor({data, handleCardClick}, cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._evt = data.evt;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
  }
  _getTemplate(){
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  }
    
  generateCard(){
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._likeButton = this._element.querySelector('.card__btn-like');   
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._likeButtonToggle();
    });
    this._element.querySelector('.card__btn-delete').addEventListener('click', () => {
        this._deleteCard();
    });
    this._cardImage.addEventListener('click', () => {
      this.handleCardClick(this._evt);
    });
  }  

  _likeButtonToggle() {
    this._likeButton.classList.toggle('card__btn-like_active');
  }

  _deleteCard() {
    this._element.remove();
    this._element.innerHTML = null; 
  }

}

      
export { Card };