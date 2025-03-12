import { Link } from "react-router-dom";
import "../styles/NotFound.scss"; // Ajoute un fichier de style si besoin

const NotFound = () => {
  return (
    <div>
    <header className="header">
    <Logo />
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/About">À propos</Link>
    </nav>
  </header>
    <div className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner à la page d'accueil</Link>
    </div>
    <footer className="footer">
        <Logo />
      </footer>

    </div>
  );
};

export default NotFound;
