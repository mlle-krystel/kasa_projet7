import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ logement }) => {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <img src={logement.cover} alt={logement.title} className="card-image" />
      <h2 className="card-title">{logement.title}</h2>
    </Link>
  );
};

export default Card;
