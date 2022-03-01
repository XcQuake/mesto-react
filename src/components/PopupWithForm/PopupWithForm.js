export default function PopupWithForm({name, title, buttonText, isOpen, onClose, children}) {
  const popupClassName = `popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={popupClassName}>
      <div className="popup__container">
        <button className="button popup__close-button" type="button" aria-label="Закрыть" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={`${name}`} noValidate>
          {children}
          <button className="button popup__confirm-button" type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}