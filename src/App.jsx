import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./pages/index.css";
import "./components/Popup/Popup.jsx";
import Popup from "./components/Popup/Popup.jsx";

function App() {
  const [open, setOpen] = useState(false);
  const closePopups = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Popup title="Popup" open={true} onClose={closePopups}></Popup>
        <Footer />
      </div>
    </>
  );
}

export default App;
