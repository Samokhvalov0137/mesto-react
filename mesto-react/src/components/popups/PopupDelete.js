import React from "react";

function PopupDelete() {
  return (
    <div className="popup popup_delete">
      <div className="popup__content">
        <button
          className="popup__close"
          id="popup-delete__close"
          type="button"
        ></button>
        <div className="popup__input">
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__submit-btn" type="submit" id="form__delete-btn">
            Да
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupDelete;
