import { useState, useEffect, useContext } from "react";
import Popup from "../Popup/Popup.jsx";
import Card from "../Card/Card.jsx";
import NewCard from "../NewCard/NewCard.jsx";
import EditAvatar from "../EditAvatar/EditAvatar.jsx";
import EditProfile from "../EditProfile/EditProfile.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import RemoveCard from "../RemoveCard/RemoveCard.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Main({
  cards,
  onCardLike,
  onCardDelete,
  onAddPlaceSubmit,
}) {
  const [popup, setPopup] = useState(null);
  const [cardToRemove, setCardToRemove] = useState(null);

  const { currentUser, handleUpdateAvatar } = useContext(CurrentUserContext);

  const newCardPopup = {
    title: "Nuevo Lugar",
    children: (
      <NewCard onClose={handleClosePopup} onAddPlaceSubmit={onAddPlaceSubmit} />
    ),
  };

  const editAvatarPopup = {
    title: "Editar Avatar",
    children: (
      <EditAvatar
        onClose={handleClosePopup}
        onUpdateAvatar={handleUpdateAvatar}
      />
    ),
  };

  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile onClose={handleClosePopup} />,
  };

  const imageCardPopup = (card) => ({
    title: "Imagen",
    children: <ImagePopup card={card} onClose={handleClosePopup} />,
  });

  const removeCardPopup = (card) => ({
    title: "Eliminar Lugar",
    children: (
      <RemoveCard
        card={card}
        onConfirm={() => {
          onCardDelete(card); // Llamamos a la función para eliminar la tarjeta
          handleClosePopup(); // Cerramos el popup después de eliminar
        }}
      />
    ),
  });

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleOpenImage(card) {
    setPopup(imageCardPopup(card));
  }

  function handleRemoveCard(card) {
    setPopup(removeCardPopup(card));
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img
            src={currentUser?.avatar || "/src/images/default-avatar.png"}
            alt="Image Profile"
            className="profile__image"
          />
          <img
            src="/src/images/Vector.png"
            alt=""
            className="profile__image-edit"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <p className="profile__text">{currentUser?.name || "Nombre"}</p>
            <img
              src="/src/images/editbuttonprofile.svg"
              alt="Button Edit"
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </div>
          <p className="profile__profession">
            {currentUser?.about || "Profesion"}
          </p>
        </div>
        <img
          src="/src/images/addbuttonprofile.png"
          alt="Button Add"
          className="profile__add-button"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>
      <section className="elements">
        <div className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenImage}
              onCardLike={onCardLike}
              onCardDelete={handleRemoveCard}
            />
          ))}
        </div>
      </section>

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
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
