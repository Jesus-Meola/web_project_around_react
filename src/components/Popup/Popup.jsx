export default function Popup(props) {
  const { onClose, title, children, type } = props;
  return (
    <div className={`popup ${open ? "popup__open" : ""}`}>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__content">
        <img
          src="/src/images/CloseIcon.png"
          alt="Boton de Cierre"
          className="popup__button-closed"
          onClick={onClose}
        />
        <div className="popup__form">
          {title && <h3 className="popup__header">{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
}
