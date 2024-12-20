import { useState, useEffect } from "react";
import api from "../utils/api";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch((err) => console.error(`Error fetching user info: ${err}`));

    api
      .getCards()
      .then((initialCards) => setCards(initialCards))
      .catch((err) => console.error(`Error fetching cards: ${err}`));
  }, []);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((updatedCard) => {
        setCards((state) =>
          state.map((c) => (c._id === updatedCard._id ? updatedCard : c))
        );
      })
      .catch((err) => console.error(`Error updating like status: ${err}`));
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.error(`Error deleting card: ${err}`));
  };

  const handleAddPlaceSubmit = async (data) => {
    try {
      // Enviar la nueva tarjeta a la API
      const newCard = await api.saveCard(data.name, data.link);

      // Actualizar el estado con la nueva tarjeta
      setCards([newCard, ...cards]);
      console.log("Hola", newCard);
      // Cerrar el popup después de agregar la tarjeta
      handleClosePopup();
    } catch (error) {
      console.error("Error al agregar una nueva tarjeta:", error);
    }
  };

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .editUser(data.name, data.about)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api
        .editAvatar(data.avatar)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleOpenPopup = (popupData) => {
    setPopup(popupData);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  return (
    <>
      <CurrentUserContext.Provider
        value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
      >
        <div className="page">
          <Header />
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}
