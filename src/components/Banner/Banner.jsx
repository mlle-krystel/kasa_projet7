import React from "react";
import "./Banner.scss";

const Banner = ({ text, image }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
    {/* Passer le texte en props est bien plus flexible et permet de réutiliser le composant ailleurs. */}
    <h1>{text}</h1>
  </div>
  
  );
};

export default Banner;
