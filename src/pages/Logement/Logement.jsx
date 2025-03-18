import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import NotFound from "../NotFound/NotFound.jsx";

import "./Logement.scss";

export function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <NotFound />;
  }

  // Générer les étoiles
  const totalStars = 5;
  const rating = parseInt(logement.rating, 10);

  return (
    <div className="logement-gallery">
    
      <Gallery pictures={logement.pictures} />

      <div className="logement-header">
        {/* Partie gauche : Titre, localisation, tags */}
        <div className="logement-info">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="tags-container">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Partie droite : Hôte + étoiles */}
        <div className="logement-host-rating">
          <div className="host">
            <p className="host-name">{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="stars">
            {[...Array(totalStars)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < rating ? "filled" : ""}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="collapses-container-page">
      <Collapse title="Description">
  <p className="text-logement">{logement.description}</p>
</Collapse>

        <Collapse title="Équipements">
  {logement.equipments.map((item, index) => (
    <p className="text-logement"  key={index}>{item}</p>
  ))}
</Collapse>

      </div>
    </div>
  );
}

export default Logement;
