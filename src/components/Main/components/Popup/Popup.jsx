export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className={`popup ${open ? "popup__open" : ""}`}>
      <div className="popup__overlay" onClick={onClose}></div>
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <img
          src="/src/images/CloseIcon.png"
          alt="Boton de Cierre"
          className="popup__button-closed"
          onClick={onClose}
        />
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
