export default function Card(props) {
  const { name, link, isLiked } = props.card;

  const imageComponent = {
    link,
    name,
  };

  const cardLikeButtonClassName = `elements__image-like ${
    isLiked ? "elements__image-like_active" : ""
  }`;

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  };

  const handleDeleteClick = () => {
    props.onCardDelete(props.card);
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
        onClick={handleDeleteClick}
      />
      <div className="elements__text">
        <h1 className="elements__title">{name}</h1>
        <img
          src="/src/images/corazon.svg"
          alt="Like"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        />
      </div>
    </article>
  );
}
