export default function Card(props) {
  const { name, link, isLiked, handleOpenPopup } = props.card;
  return (
    <article className="elements__card">
      <img src={link} alt="" className="elements__image" />
      <img
        src="/src/images/papelera.svg"
        alt="Imagen Papelera"
        className="elements__image-trash"
        handleOpenPopup
      />
      <div className="elements__text">
        <h1 className="elements__title">{name}</h1>
        <img
          src="/src/images/corazon.svg"
          alt="Like"
          className="elements__image-like"
        />
      </div>
    </article>
  );
}
