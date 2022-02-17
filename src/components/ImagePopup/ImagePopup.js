export default function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_image ${card.link ? 'popup_opened' : ''}`} >
      <div className="popup__image-container">
        <button className="button popup__close-button" type="button" aria-label="Закрыть" onClick={onClose}></button>
        <figure className="popup__figure">
          <img src={card.link} alt={card.name} className="popup__image"/>
          <figcaption className="popup__image-caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}