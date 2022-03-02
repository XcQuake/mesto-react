import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDesctiption(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: name,
      about: description
    })
  }

  return (
    <PopupWithForm 
        title = {'Редактировать профиль'} 
        name = {'profile'} 
        buttonText = {'Сохранить'}
        isOpen = {isOpen}
        onClose = {onClose}
        onSubmit = {handleSubmit}
    >
      <label className="popup__field">
        <input name="name" type="text" value={name} onChange={handleChangeName} className="popup__input popup__input_type_name" id="name" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="popup__input-error name-error"></span>
      </label>
      <label className="popup__field">
        <input name="about" type="text" value={description} onChange={handleChangeDesctiption} className="popup__input popup__input_type_about" id="about" placeholder="О себе" minLength="2" maxLength="200" required />
        <span className="popup__input-error about-error"></span>
      </label>
    </PopupWithForm>
  )
}