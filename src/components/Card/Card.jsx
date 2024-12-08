export default function Card(props) {
  const { name, link, isLiked } = props.card;

  const imageComponent = {
    link,
    name,
  };

  return (
    <article className="elements__card">
      <img
        src={link}
        alt={name}
        className="elements__image"
        onClick={() => props.handleOpenPopup(imageComponent)}
      />
      <img
        src="/src/images/papelera.svg"
        alt="Imagen Papelera"
        className="elements__image-trash"
        onClick={() => props.onRemove(props.card)}
      />
      <div className="elements__text">
        <h1 className="elements__title">{name}</h1>
        <img
          src="/src/images/corazon.svg"
          alt="Like"
          className="elements__image-like"
          onClick={isLiked ? handleOpenPopup : null}
        />
      </div>
    </article>
  );
}
