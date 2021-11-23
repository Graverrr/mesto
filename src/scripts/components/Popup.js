class Popup {
  constructor(popup){
      this._popup = popup;
      this._listenerClick = this._handleEscClose.bind(this);
      
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', () => this.close());
    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) this.close();
    });
  }


  open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._listenerClick);
  }

  close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._listenerClick);
  }

  _handleEscClose (evt) {
      if (evt.key === 'Escape') {
          this.close();
      }
  }
}

export {Popup}