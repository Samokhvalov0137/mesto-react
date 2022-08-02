import React from "react";
import "../../src/index.css";
import Header from "./landing/Header";
import Main from "./landing/Main";
import Footer from "./landing/Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        name={"edit"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
        buttonText={'Сохранить'}
      />

      <PopupWithForm
        name={"add"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
        buttonText={'Создать'}
      />

      <PopupWithForm
        name={"avatar"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
        buttonText={'Сохранить'}
      />

      <PopupWithForm
        name={"delete"}
        title={"Вы уверены?"}
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        buttonText={'Да'}
      />

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
