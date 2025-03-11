import { Link } from "react-router-dom";
import "../styles/NotFound.scss"; // Ajoute un fichier de style si besoin

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner à la page d'accueil</Link>
    </div>
  );
};

export default NotFound;
