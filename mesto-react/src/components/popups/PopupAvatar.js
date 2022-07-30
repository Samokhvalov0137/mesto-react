import React from "react";

function PopupAvatar() {
  return (
    <div className="popup popup_avatar">
      <div className="popup__content">
        <button
          className="popup__close"
          id="popup-avatar__close"
          type="button"
        ></button>
        <div className="popup__input">
          <h2 className="popup__title">Обновить аватар</h2>
          <form novalidate className="form" name="form__avatar" id="form__avatar">
            <fieldset className="form__set">
              <label className="form__field">
                <input
                  className="form__input"
                  id="input_avatar_link"
                  type="url"
                  name="form_avatar"
                  placeholder="Ссылка"
                  required
                />
                <span id="error-input_avatar_link" className="error"></span>
              </label>
              <button
                className="popup__submit-btn"
                type="submit"
                id="form__avatar-btn"
              >
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupAvatar;
