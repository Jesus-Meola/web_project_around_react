import { useState, useEffect } from "react";
import api from "../utils/api";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api.getUserInfo().then((data) => setCurrentUser(data));
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}
