const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__edit-button');
const popupCloseBtn = popup.querySelector('.popup__close');


function popupToggle() {
  popup.classList.toggle('popup__opened')
};

function clickOverlay(event){
  if (event.target === event.currentTarget) {
    popupToggle()
  }
}
popup.addEventListener('click', clickOverlay)

popupOpenBtn.addEventListener('click', popupToggle);
popupCloseBtn.addEventListener('click', popupToggle);