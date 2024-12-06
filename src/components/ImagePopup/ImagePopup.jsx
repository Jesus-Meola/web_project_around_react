export default function ImagePopup(props) {
  const { card } = props;
  return (
    <div className="popup__image-content">
      <img src={card.link} alt={card.name} className="popup__image-photo" />
      <p className="popup__image-name">{card.name}</p>
    </div>
  );
}
