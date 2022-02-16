export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`} >
      <div className="popup__image-container">
        <button className="button popup__close-button" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img src={props.card.link} alt={props.card.name} className="popup__image"/>
          <figcaption className="popup__image-caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}