import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
    <Header />
    <Main 
      onEditProfile = {handleEditProfileClick}
      onAddPlace = {handleAddPlaceClick}
      onEditAvatar = {handleEditAvatarClick}
      onCardClick = {handleCardClick}
    />
    <Footer />
    <PopupWithForm title = {'Редактировать профиль'} name = {'profile'} buttonText = {'Сохранить'} isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups}>
      <label className="popup__field">
        <input name="name" type="text" className="popup__input popup__input_type_name" id="name" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="popup__input-error name-error"></span>
      </label>
      <label className="popup__field">
        <input name="sabout" type="text" className="popup__input popup__input_type_about" id="about" placeholder="О себе" minLength="2" maxLength="200" required />
        <span className="popup__input-error about-error"></span>
      </label>
    </PopupWithForm>
    <PopupWithForm title = {'Новое место'} name = {'card'} buttonText = {'Создать'} isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups}>
      <label className="popup__field">
        <input name="name" type="text" className="popup__input popup__input_type_name" id="title" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="title-error popup__input-error"></span>
      </label>
      <label className="popup__field">
        <input name="link" type="url" className="popup__input popup__input_type_link" id="link" placeholder="Ссылка на картинку" maxLength="250" required />
        <span className="popup__input-error link-error"></span>
      </label>
    </PopupWithForm>
    <PopupWithForm title = {'Обновить аватар'} name = {'avatar'} buttonText = {'Сохранить'} isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups}>
      <label className="popup__field">
        <input name="avatar" type="url" className="popup__input popup__input_type_avatar-link" id='avatar' placeholder="Ссылка на аватар" maxLength="250" required />
        <span className="popup__input-error avatar-error"></span>
      </label>
    </PopupWithForm>
    <ImagePopup card = {selectedCard} onClose = {closeAllPopups}></ImagePopup>
    </>
  );
};

export default App;
