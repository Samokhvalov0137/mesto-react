import React from "react";

function PopupWithForm({ name, title, children, isOpen = false, onClose }) {
  if (isOpen) {
    return (
      <div className={`popup popup_${name} popup_opened`}>
        <div className="popup__content">
          <button
            className="popup__close"
            type="button"
            onClick={onClose}
          ></button>
          <div className="popup__input">
            <h2 className="popup__title">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default PopupWithForm;
