export default function ImagePopup(props) {
  const { onClose, card } = props;
  console.log(card);
  return (
    <div className="popup__image-content">
      <img src={card.link} alt={card.name} className="popup__image" />
      <img
        src="/src/images/CloseIcon.png"
        alt="Boton de Cierre"
        className="popup__button-closed"
        onClick={onClose}
      />
    </div>
  );
}
