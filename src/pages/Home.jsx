import logements from "../data/logements.json";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import About from "./About.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="header">
        <Logo />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/About">À propos</Link>
        </nav>
      </header>

      <Banner text="Chez vous, partout et ailleurs" />
      <div className="logements-container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
      <footer className="footer">
        <Logo />
      </footer>
    </div>
  );
};

export default Home;
