import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function DeleteCardPopup({card, isOpen, onClose, onDeleteCard}) {
  
  function handleDeleteCard(e) {
    e.preventDefault();
    onDeleteCard(card);
  }

  return (
    <PopupWithForm 
      title={'Вы уверены?'} 
      name={'avatar'} 
      buttonText={'Да'} 
      isOpen={isOpen} 
      onClose={onClose}
      onSubmit={handleDeleteCard}
    />
  )
}