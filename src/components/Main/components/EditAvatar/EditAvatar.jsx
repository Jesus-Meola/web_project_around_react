export default function EditAvatar() {
  return (
    <form className="popup__form popup__profile-form">
      <img
        src="/src/images/CloseIcon.png"
        alt="Boton de Cierre"
        className="popup__button-closed"
      />
      <h3 className="popup__header">Cambiar foto de perfil</h3>
      <input
        type="url"
        id="input-url"
        className="popup__card-url popup__input"
        name="link"
        minLength="2"
        maxLength="40"
        placeholder="https://somewebsite.com/someimage.jpg"
        required
      />
      <span className="popup__error-visible input-name-error"></span>
      <button type="submit" className="popup__button-create popup__button">
        Guardar
      </button>
    </form>
  );
}
