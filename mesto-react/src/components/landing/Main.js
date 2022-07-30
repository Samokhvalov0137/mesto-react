import React from "react";
import ImgAvatar from '../../images/Avatar.jpg'

function Main() {
    return(
        <main className="content">
        <section className="profile">
          <img className="profile__avatar" src={ImgAvatar} alt="аватар"/>
          <button className="profile__button profile__button-avatar"></button>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                className="profile__button profile__button-edit"
                type="button"
              ></button>
            </div>
            <p className="profile__status">Исследователь океана</p>
          </div>
          <button
            className="profile__button profile__button-add"
            type="button"
          ></button>
        </section>

        <section className="elements"></section>
      </main>
    );
}

export default Main;