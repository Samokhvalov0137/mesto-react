import React from "react";

function PopupAddCard() {
  return (
    <div className="popup" id="popup-add">
      <div className="popup__content">
        <button
          className="popup__close"
          id="popup-add__close"
          type="button"
        ></button>
        <div className="popup__input">
          <h2 className="popup__title">Новое место</h2>
          <form novalidate className="form" name="form__add" id="form__add">
            <fieldset className="form__set">
              <label className="form__field">
                <input
                  className="form__input"
                  id="input_add_place"
                  type="text"
                  name="form_place"
                  placeholder="Название"
                  required
                  minlength="2"
                />
                <span id="error-input_add_place" className="error"></span>
              </label>
              <label className="form__field">
                <input
                  className="form__input"
                  id="input_add_link"
                  type="url"
                  name="form_link"
                  placeholder="Ссылка"
                  required
                />
                <span id="error-input_add_link" className="error"></span>
              </label>
              <button
                className="popup__submit-btn"
                type="submit"
                id="form__add-bth"
              >
                Создать
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupAddCard;
