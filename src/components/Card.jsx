import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <img src={logement.cover} alt={logement.title} />
      <h2>{logement.title}</h2>
      <p>{logement.location}</p>
    </Link>
  );
};

export default Card;
