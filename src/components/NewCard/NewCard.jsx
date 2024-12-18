export default function NewCard() {
  return (
    <form className="popup__card-form popup__form">
      <h3 className="popup__card-header">Nuevo Lugar</h3>
      <input
        type="text"
        id="input-title"
        className="popup__card-title popup__input"
        name="title"
        minLength="2"
        maxLength="40"
        placeholder="Titulo"
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
        required
      />
      <span className="popup__error-visible input-url-error"></span>

      <button type="submit" className="popup__card-button-create popup__button">
        Crear
      </button>
    </form>
  );
}
