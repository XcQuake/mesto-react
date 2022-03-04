import React from "react";
import PopupWithForm from "./PopupWithForm";
import {useValidation} from './useValidation'

export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');
  const [isTouched, setIsTouched] = useState(false);

  function handleAddTitle(e) {
    setTitle(e.target.value);
  }

  function handleAddLink(e) {
    setLink(e.target.value);
  }

  function handleOnBlur() {
    setIsTouched(true)
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: title,
      link: link
    });

    setTitle('');
    setLink('');
    setIsTouched(false);
  }, [isOpen])

  // Валидация форм
  const linkValid = useValidation(link, {isEmpty: true, isUrl: true});
  const titleValid = useValidation(title, {minLength: 2, isEmpty: true});
  const buttonClassName = `button popup__confirm-button ${!linkValid.validity || !titleValid.validity ? 'popup__confirm-button_inactive' : ''}`

  return (
    <PopupWithForm 
      title={'Новое место'} 
      name={'card'} 
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
          onBlur={handleOnBlur}
          className="popup__input popup__input_type_name" 
          id="title" 
          placeholder="Название" 
          minLength="2" 
          maxLength="30" 
          required 
        />
        {(isTouched && titleValid.minLengthError) && <span className="popup__input-error link-error">{titleValid.errorMessage}</span>}
      </label>
      <label className="popup__field">
        <input 
          name="link" 
          type="url" 
          value={link} 
          onChange={handleAddLink}
          onBlur={handleOnBlur}
          className="popup__input popup__input_type_link" 
          id="link" 
          placeholder="Ссылка на картинку"
          maxLength="250" 
          required 
        />
        {(isTouched && linkValid.urlError) && <span className="popup__input-error link-error">{linkValid.errorMessage}</span>}
      </label>
      <button className={buttonClassName} disabled={!linkValid.validity || !titleValid.validity} type="submit">
      </button>
    </PopupWithForm>
  )
}

