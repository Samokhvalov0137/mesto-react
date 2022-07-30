import React from "react";

function PopupOpenImage() {
  return (
    <div className="popup popup_images">
      <div className="popup__elements">
        <button
          type="button"
          className="popup__close"
          id="popup-card__close"
        ></button>
        <div className="popup__card">
          <img className="popup__image" src="#" alt="#" />
          <p className="popup__name"></p>
        </div>
      </div>
    </div>
  );
}

export default PopupOpenImage;
