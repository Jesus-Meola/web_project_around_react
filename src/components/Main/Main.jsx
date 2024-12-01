import { useState } from "react";
import NewCard from "../NewCard/NewCard";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = {
    tittle: "Nuevo Lugar",
    children: <NewCard />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img src="" alt="" className="profile__image" />
          <img
            src="/src/images/Vector.png"
            alt=""
            className="profile__image-edit"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <p className="profile__text"></p>
            <img
              src="/src/images/editbuttonprofile.svg"
              alt="Button Edit"
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </div>
          <p className="profile__profession"></p>
        </div>
        <img
          src="/src/images/addbuttonprofile.png"
          alt="Button Add"
          className="profile__add-button"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>
      <section className="elements"></section>

      <template className="template-card">
        <article className="elements__card">
          <img src="." alt="" className="elements__image" />
          <img
            src="/src/images/papelera.svg"
            alt="Imagen Papelera"
            className="elements__image-trash"
          />
          <div className="elements__text">
            <h1 className="elements__title"></h1>
            <img
              src="/src/images/corazon.svg"
              alt="Like"
              className="elements__image-like"
            />
          </div>
        </article>
      </template>
      {popup && (
        <Popup onClose={setPopup} tittle={popup.tittle}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
