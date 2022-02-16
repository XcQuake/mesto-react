import React from 'react';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setuserDescription] = React.useState();
  const [userAvatar, setuserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setuserDescription(data.about);
        setuserAvatar(data.avatar);
      })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data.map(item => item))
      })
  })

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className='profile__avatar-image' src={userAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userDescription}</p>
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

