import { useRef } from "react";

export default function EditAvatar({ onClose, onUpdateAvatar }) {
  const avatarRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({ avatar: avatarRef.current.value });
    onClose();
  };
  return (
    <form
      className="popup__form popup__profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      {/* <h3 className="popup__header">Cambiar foto de perfil</h3> */}
      <input
        type="url"
        id="input-url"
        className="popup__card-url popup__input"
        name="link"
        minLength="2"
        maxLength="40"
        placeholder="URL del Avatar"
        required
        ref={avatarRef}
      />
      <span className="popup__error-visible input-name-error"></span>
      <button type="submit" className="popup__button-create popup__button">
        Guardar
      </button>
    </form>
  );
}
