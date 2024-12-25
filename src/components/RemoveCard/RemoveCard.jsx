export default function RemoveCard({ onConfirm }) {
  return (
    <div className="popup__form">
      {/* <div className="popup__form"> */}
      {/* <h3 className="popup__header">¿Estás seguro?</h3> */}
      <button
        className="popup__button-create popup__button"
        type="button"
        onClick={onConfirm}
      >
        Sí
      </button>
      {/* </div> */}
    </div>
  );
}
