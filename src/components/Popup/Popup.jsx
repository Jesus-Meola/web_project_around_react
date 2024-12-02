export default function Popup(props) {
  const { title, children, open, onClose } = props;
  console.log(open, props);
  return (
    <div className={`popup ${open ? "popup__open" : ""}`}>
      <div className="popup__overlay" onClick={onClose} />
      <div className="popup__content">
        <img
          src="/src/images/CloseIcon.png"
          alt="Boton de Cierre"
          className="popup__button-closed"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
