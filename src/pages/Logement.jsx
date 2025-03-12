import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Gallery from "../components/Gallery";
import Collapse from "../components/Collapse";
import Home from "./Home.jsx";

export function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <h1>Logement non trouvé</h1>;
  }

  return (
    <div> 
    <header className="header">
     <Logo />
     <nav>
     <Link to="/">Accueil</Link>
     <Link to="/about">À propos</Link>
     </nav>
   </header>
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <Gallery pictures={logement.pictures} />
      <Collapse title="Description">{logement.description}</Collapse>
      <Collapse title="Équipements">
        {logement.equipments.length > 0 ? (
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Aucun équipement disponible</p>
        )}
      </Collapse>
      <footer className="footer">
      <Logo />
      </footer>
      </div>
  );
}
