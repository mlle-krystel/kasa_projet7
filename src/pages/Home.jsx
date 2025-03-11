import logements from "../data/logements.json";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div>
     <header className="header">
      <Logo />
      <nav>
        <a href="/">Accueil</a>
        <a href=".">À propos</a>
      </nav>
    </header>

      <Banner text="Chez vous, partout et ailleurs" />
      <div className="logements-container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
};

export default Home;
