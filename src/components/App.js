import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState('Undefined');

  React.useEffect(() => {
    api.getUserInfo()
      .then(user => setCurrentUser(user))
      .catch(err => console.log(err))
  }, []);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleUpdateUser({name, about}) {
    api.setUserInfo({name, about})
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main 
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <PopupWithForm title={'Новое место'} name={'card'} buttonText={'Создать'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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
      <ImagePopup card = {selectedCard} isOpen = {isImagePopupOpen} onClose = {closeAllPopups}></ImagePopup>
    </CurrentUserContext.Provider>
  );
};

export default App;
