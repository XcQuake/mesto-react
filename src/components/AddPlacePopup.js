import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleAddTitle(e) {
    setTitle(e.target.value);
  }

  function handleAddLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: title,
      link: link
    });

    setTitle('');
    setLink('');
  }

  return (
    <PopupWithForm 
      title={'Новое место'} 
      name={'card'} 
      buttonText={'Создать'} 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input 
          name="name" 
          type="text" 
          value={title} 
          onChange={handleAddTitle} 
          className="popup__input popup__input_type_name" 
          id="title" 
          placeholder="Название" 
          minLength="2" 
          maxLength="30" 
          required 
        />
        <span className="title-error popup__input-error"></span>
      </label>
      <label className="popup__field">
        <input 
          name="link" 
          type="url" 
          value={link} 
          onChange={handleAddLink} 
          className="popup__input popup__input_type_link" 
          id="link" 
          placeholder="Ссылка на картинку" 
          maxLength="250" 
          required 
        />
        <span className="popup__input-error link-error"></span>
      </label>
    </PopupWithForm>
  )
}