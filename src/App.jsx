import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import "./pages/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <footer className="footer">
          <p className="footer__copyright">&#169; 2024 Alrededor del Mundo</p>
        </footer>
      </div>
    </>
  );
}

export default App;
