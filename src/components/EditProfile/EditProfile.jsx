import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function EditProfile({ onClose }) {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser?.name);
  const [description, setDescription] = useState(currentUser?.about);

  useEffect(() => {
    setName("");
    setDescription("");
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({ name, about: description });
    onClose();
  };

  return (
    <form
      className="popup__profile-form popup__form"
      noValidate
      onSubmit={handleSubmit}
    >
      <h3 className="popup__header">Edit profile</h3>
      <input
        type="text"
        id="input-name"
        className="popup__name popup__input"
        name="userName"
        minLength="2"
        maxLength="40"
        placeholder="Nombre"
        required
        value={name}
        onChange={handleNameChange}
      />
      <span className="popup__error-visible input-name-error"></span>

      <input
        type="text"
        id="input-description"
        className="popup__description popup__input"
        name="userDescription"
        minLength="2"
        maxLength="200"
        placeholder="Acerca de mí"
        required
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="popup__error-visible input-description-error"></span>

      <button type="submit" className="popup__button-create popup__button">
        Guardar
      </button>
    </form>
  );
}
