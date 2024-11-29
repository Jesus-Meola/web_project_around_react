export default function Popup(props) {
  const { title, children, open, onClose } = props;

  return (
    <div className="popup">
      <div className="popup__overlay" onClick={props.onClose} />
      <div className="popup__content">
        <img
          src="/assets/close.svg"
          alt="Close popup"
          className="popup__close"
          onClick={props.onClose}
        />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
