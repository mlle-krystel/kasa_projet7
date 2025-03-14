import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";


const About = () => {
  return (

      <>
        <Banner image="/assets/banner_about.jpg" text="À propos" />

        <main>
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
        </main>
      </>


  );
};

export default About;
