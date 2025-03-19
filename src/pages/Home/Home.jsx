import logements from "../../data/logements.json";
import Card from "../../components/Card/Card.jsx";
import bannerImage from "../../assets/banner.png";
import Banner from "../../components/Banner/Banner.jsx";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* En inscrivant le texte de Banner ici, on pourra afficher une autre bannière avec un texte différent sur d’autres pages.  */}
      <Banner
        text="Chez vous, partout et ailleurs"
        image={bannerImage}
        aboutPage={false}
      />

      {/* Conteneur pour les logements */}

      <div className="logements-container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </>
  );
};

export default Home;
