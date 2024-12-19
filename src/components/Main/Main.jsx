import { useState, useEffect, useContext } from "react";
import Popup from "../Popup/Popup.jsx";
import Card from "../Card/Card.jsx";
import NewCard from "../NewCard/NewCard.jsx";
import EditAvatar from "../EditAvatar/EditAvatar.jsx";
import EditProfile from "../EditProfile/EditProfile.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import RemoveCard from "../RemoveCard/RemoveCard.jsx";
import api from "../../utils/api.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cardToRemove, setCardToRemove] = useState(null);
  const [cards, setCards] = useState([]);

  const { currentUser, handleUpdateAvatar } = useContext(CurrentUserContext);

  useEffect(() => {
    api.getCards().then((data) => setCards(data));
  }, []);

  const newCardPopup = {
    title: "Nuevo Lugar",
    children: <NewCard />,
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

  const removeCardPopup = {
    title: "Eliminar Lugar",
    children: (
      <RemoveCard onClose={handleClosePopup} onConfirm={handleCardDelete} />
    ),
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleOpenImage(card) {
    setPopup(imageCardPopup(card));
  }

  function handleRemoveCard(card) {
    setCardToRemove(card);
    setPopup(removeCardPopup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    try {
      const newCard = isLiked
        ? await api.deleteLikeCard(card._id)
        : await api.likeCard(card._id);

      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    } catch (error) {
      console.error("Error al cambiar el estado de like:", error);
    }
  }

  async function handleCardDelete(card) {
    if (!cardToRemove) return;
    try {
      await api.deleteCard(card._id);

      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== card._id)
      );
    } catch (error) {
      console.error("Error al eliminar la tarjeta:", error);
    }
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
              // onRemove={handleRemoveCard}
              onCardLike={handleCardLike}
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
