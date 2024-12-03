import { useState } from "react";
import Popup from "../Main/components/Popup/Popup.jsx";
import NewCard from "../Main/components/NewCard/NewCard.jsx";
import EditAvatar from "../Main/components/EditAvatar/EditAvatar.jsx";
import EditProfile from "../Main/components/EditProfile/EditProfile.jsx";
import Card from "../Main/components/Card/Card.jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

<ul className="cards__list">
  {cards.map((card) => (
    <Card key={card._id} card={card} />
  ))}
</ul>;

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = {
    tittle: "Nuevo Lugar",
    children: <NewCard />,
  };

  const editAvatarPopup = {
    tittle: "Editar Avatar",
    children: <EditAvatar />,
  };

  const editProfilePopup = {
    tittle: "Editar Perfil",
    children: <EditProfile />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
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
        <Popup onClose={handleClosePopup} tittle={popup.tittle}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
