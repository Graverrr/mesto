// 

class Card {
  constructor({data, handleCardClick, handleLikeClick, handleCardDelete}, cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    
    this._evt = data.evt;
    this.id = data._id;
    this._userId = data.owner._id;
    this._myId = data.currentUser;
    this._handleCardDelete = handleCardDelete;
    this._currentUserId = data.currentUserId;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
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
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    this._likeCount = this._element.querySelector('.card__like-count')
    this._likeCount.textContent = this._likes.length
    this._cardDeleteBtn = this._element.querySelector('.card__btn-delete')

    if(this._myId === this._userId) {
      this._cardDeleteBtn.classList.add('card_btn-delete_visible');
    } else {
      this._cardDeleteBtn.classList.remove('card_btn-delete_visible');
    }
    this._setEventListeners();
    this._updateLikes()
    return this._element;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__btn-like'); 
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this);
    });
    this._element.querySelector('.card__btn-delete').addEventListener('click', () => {
        this._handleCardDelete(this);
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

  isLiked(){
    return this._likes.some(user => user._id === this._currentUserId)
  } 

  setLikes(dataLikes){
    this._likes = dataLikes;
    
    this._likeCount.textContent = this._likes.length
    this._updateLikes()
    
  }

  _updateLikes(){
    if (this.isLiked()){
      this._likeButton.classList.add('card__btn-like_active')
    }else{
      this._likeButton.classList.remove('card__btn-like_active')
    }
    
  }

}
      
export { Card };