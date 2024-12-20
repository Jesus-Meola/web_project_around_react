import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });

    setName("");
    setLink("");
  };
  return (
    <form className="popup__card-form popup__form" onSubmit={handleSubmit}>
      <h3 className="popup__card-header">Nuevo Lugar</h3>
      <input
        type="text"
        id="input-title"
        className="popup__card-title popup__input"
        name="title"
        minLength="2"
        maxLength="40"
        placeholder="Titulo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <span className="popup__error-visible input-title-error"></span>

      <input
        type="url"
        id="input-url"
        className="popup__card-url popup__input"
        name="link"
        minLength="2"
        placeholder="Enlace a la imagen"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
      />
      <span className="popup__error-visible input-url-error"></span>

      <button type="submit" className="popup__card-button-create popup__button">
        Crear
      </button>
    </form>
  );
}
