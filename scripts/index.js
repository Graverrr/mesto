const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__btn-edit');
const popupCloseBtn = popup.querySelector('.popup__close');
const like = document.querySelectorAll('.element__btn-like');
let form = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');

for(let i = 0; i<like.length; i++) {
  like[i].addEventListener('click', function(){
    like[i].classList.toggle('element__btn-like_active')
  }
  )
}
function popupToggle() {
  popup.classList.toggle('popup__opened')
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

function clickOverlay(event){
  if (event.target === event.currentTarget) {
    popupToggle()
  }
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupToggle()
}
form.addEventListener('submit', formSubmitHandler);

popup.addEventListener('click', clickOverlay)
popupOpenBtn.addEventListener('click', popupToggle);
popupCloseBtn.addEventListener('click', popupToggle);