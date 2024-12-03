export default function ImagePopup(props) {
  const { onClose, card } = props;
  return (
    <div className="popup__image-content">
      <img src={card.link} alt="" className="popup__image" />
      <img
        src="/src/images/CloseIcon.png"
        alt="Boton de Cierre"
        className="popup__button-closed"
        onClick={onClose}
      />
    </div>
  );
}
