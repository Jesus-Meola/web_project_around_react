export default function RemoveCard({ card, onConfirm }) {
  return (
    <div>
      <div className="popup__form">
        <h3 className="popup__header">¿Estás seguro?</h3>
        <button
          className="popup__button popup__button-create"
          type="button"
          onClick={() => onConfirm(card)}
        >
          Sí
        </button>
      </div>
    </div>
  );
}
