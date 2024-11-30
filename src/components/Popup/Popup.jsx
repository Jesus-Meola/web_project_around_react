export default function Popup(props) {
  const { title, children, onClose } = props;

  return (
    <div className="popup">
      <div className="popup__overlay" onClick={onClose} />
      <div className="popup__content">
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
