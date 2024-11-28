import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./pages/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
