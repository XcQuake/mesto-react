export default function Card({card, onCardClick}) {
  function handleClick() {
   onCardClick(card);
  } 

  return (
    <li className="card">
      <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
      <button className="button card__delete-button card__delete-button_hidden" type="button" aria-label="Удалить"></button>
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button className="button card__like-button" type="button" aria-label="Нравится"></button>
          <div className="card__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  )
}