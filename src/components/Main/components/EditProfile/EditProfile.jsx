export default function EditProfile() {
  return (
    <form className="popup__profile-form popup__form">
      <img
        src="/src/images/CloseIcon.png"
        alt="Boton de Cierre"
        className="popup__button-closed"
      />
      <h3 className="popup__header">Edit profile</h3>
      <input
        type="text"
        id="input-name"
        className="popup__name popup__input"
        name="name"
        minLength="2"
        maxLength="40"
        placeholder="Jacques Cousteau"
        required
      />
      <span className="popup__error-visible input-name-error"></span>

      <input
        type="text"
        id="input-description"
        className="popup__description popup__input"
        name="description"
        minLength="2"
        maxLength="200"
        placeholder="Explorador"
        required
      />
      <span className="popup__error-visible input-description-error"></span>

      <button type="submit" className="popup__button-create popup__button">
        Guardar
      </button>
    </form>
  );
}
