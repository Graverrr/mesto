
 export class Card {
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
  _toggleLikeStatus (evt) {
    evt.target.classList.toggle('card__btn-like_active');
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    return this._element;
  }


  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup()
    });

    popupImageCloseBtn.addEventListener('click', () => {
      this._handleClosePopup()
    });
  }

  _handleOpenPopup() {
    this._element.textContent = this._name;
    this._element.alt = this._name;
    this._element.src = this._link;
    this._element.classList.add('popup_opened');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupImage.classList.remove('popup_opened');
  }
}


