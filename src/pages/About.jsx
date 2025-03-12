import React from "react";
import "../styles/About.scss";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div>
      <header className="header">
        <Logo />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/About">À propos</Link>
        </nav>
      </header>
    <div className="a-propos">
      <Banner image="/assets/banner_about.jpg" text="À propos" />
      <Collapse title="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale...
      </Collapse>
      <Collapse title="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa...
      </Collapse>
      <Collapse title="Service">
        La qualité du service est au cœur de notre engagement...
      </Collapse>
      <Collapse title="Sécurité">
        La sécurité est la priorité de Kasa...
      </Collapse>
    </div>

    <footer className="footer">
        <Logo />
      </footer>
      </div>
  );
};

export default About;
