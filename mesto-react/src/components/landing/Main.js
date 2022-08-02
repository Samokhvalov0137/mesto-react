import React, { useEffect } from "react";
import { api } from "../../utils/Api";
import imgAvatar from "../../images/Avatar.jpg";
import Card from "../Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("Name");
  const [userDescription, setUserDescription] =
    React.useState("About yourself");
  const [userAvatar, setUserAvatar] = React.useState(imgAvatar);
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getCardsArray()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="аватар" />
        <button
          className="profile__button profile__button-avatar"
          onClick={onEditAvatar}
        ></button>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button profile__button-edit"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__status">{userDescription}</p>
        </div>
        <button
          className="profile__button profile__button-add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
