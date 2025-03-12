import React from "react";
import logoHouse from "../assets/Vector.png"; 
import "../styles/Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <span className="logo-text">K</span>
      <img src={logoHouse} alt="Kasa logo" className="logo-icon" />
      <span className="logo-text">sa</span>
    </div>
  );
};

export default Logo;
