import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./pages/index.css";
import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/NewCard/NewCard.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/EditAvatar/EditAvatar.jsx";

function App() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openNewCard, setOpenNewCard] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openEditAvatar, setOpenEditAvatar] = useState(false);

  const closePopups = () => {
    setOpenPopup(false);
    setOpenNewCard(false);
    setOpenEditProfile(false);
    setOpenEditAvatar(false);
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Popup open={openPopup} onClose={closePopups} />
        <NewCard open={openNewCard} onClose={closePopups} />
        <EditProfile open={openEditProfile} onClose={closePopups} />
        <EditAvatar open={openEditAvatar} onClose={closePopups} />
        <Footer />
      </div>
    </>
  );
}

export default App;
