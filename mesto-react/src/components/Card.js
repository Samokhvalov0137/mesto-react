import React from "react";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <img
        className="element__photo"
        src={card.link}
        id="card-image"
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="element__group">
        <h2 className="element__title">{card.name}</h2>
        <button type="button" className="element__trash"></button>
        <div className="element__vector-container">
          <button type="button" className="element__vector"></button>
          <p className="element__vector-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
