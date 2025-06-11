const Card = ({
  image,
  title,
  description,
  buttonText = "Source Code",
  buttonLink = "#",
}) => {
  return (
    <div
      className="card bg-base-100 w-96 shadow-sm"
      style={{
        background: "black",
        color: "white",
      }}
    >
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">{buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
