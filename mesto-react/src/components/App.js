import React from "react";
import "../../src/index.css";
import Header from "./landing/Header";
import Main from "./landing/Main";
import Footer from "./landing/Footer";
import PopupEditProfile from "./popups/PopupEditProfile";
import PopupAddCard from "./popups/PopupAddCard";
import PopupOpenImage from "./popups/PopupOpenImage";
import PopupAvatar from "./popups/PopupAvatar";
import PopupDelete from "./popups/PopupDelete";

function App() {
  return (
    <body className="root">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
      <PopupEditProfile />
      <PopupAddCard />
      <PopupOpenImage />
      <PopupAvatar />
      <PopupDelete />
    </body>
  );
}

export default App;
