import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="erreur">404</h1>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="notfound-link">Retourner à la page d'accueil</Link>
    </div>
  );
};

export default NotFound;
