import React from 'react';
import api from '../../utils/api';
import Card from '../Card/Card';
import avatar from '../../images/avatar.jpg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getFullData()
      .then(([user, cards]) => {
        setCards(cards)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className='profile__avatar-image' src={currentUser.avatar} alt='Аватар' />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__about">{currentUser.about}</p>
          <button className="button profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
        </div>
        <button className="button profile__add-button" type="button" aria-label="Добавить фото" onClick={onAddPlace}></button>
      </section>
      <section className="gallery" aria-label="Галерея">
        <ul className='gallery__list'> 
          {cards.map((item) => <Card key = {item._id} card = {item} onCardClick = {onCardClick}/> )}
        </ul>
      </section>
    </main>
  )
}

