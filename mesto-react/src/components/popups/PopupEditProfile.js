import React from "react";

function PopupEditProfile() {
  return (
    <div className="popup" id="popup-edit">
      <div className="popup__content">
        <button type="button" class="popup__close"></button>
        <div className="popup__input">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form novalidate className="form" name="form-edit" id="form-edit">
            <fieldset className="form__set">
              <label className="form__field">
                <input
                  className="form__input"
                  id="form_name"
                  type="text"
                  name="form_name"
                  placeholder="Имя"
                  value=""
                  required
                  minlength="2"
                  maxlength="40"
                />
                <span id="error-form_name" className="error"></span>
              </label>
              <label className="form__field">
                <input
                  className="form__input"
                  id="form_status"
                  type="text"
                  name="form_status"
                  placeholder="О себе"
                  value=""
                  required
                  minlength="2"
                  maxlength="200"
                />
                <span id="error-form_status" className="error"></span>
              </label>
              <button
                className="popup__submit-btn"
                type="submit"
                id="form__edit-bth"
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

export default PopupEditProfile;
