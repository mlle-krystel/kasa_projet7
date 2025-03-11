import React from "react";
import "../styles/A_propos.scss";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

const A_propos = () => {
  return (
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
  );
};

export default A_propos;
