import React from "react";
import aboutImage from "../../assets/aboutImage.png";
import Banner from "../../components/Banner/Banner.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import "./About.scss";

const About = () => {
  return (
    <>
      <Banner image={aboutImage} aboutPage={true} />

      <div className="container-about">
        <Collapse title="Fiabilité" isAbout>
          <p className="about-text">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse title="Respect" isAbout>
          <p className="about-text">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Service" isAbout>
          <p className="about-text">
            La qualité du service est au cœur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance.
          </p>
        </Collapse>
        <Collapse title="Sécurité" isAbout>
          <p className="about-text">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </>
  );
};

export default About;
