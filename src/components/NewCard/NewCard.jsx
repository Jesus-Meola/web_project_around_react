import Popup from "../Popup/Popup.jsx";

export default function NewCard(props) {
  const { open, onClose } = props;
  console.log(props);
  return (
    <form className="popup__card-form popup__form">
      <img
        src="/src/images/CloseIcon.png"
        alt="Boton de Cierre"
        className="popup__card-button-closed popup__button-closed"
      />
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
