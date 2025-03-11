import React from "react";
import { Link } from "react-router-dom";
import logoHouse from "../assets/Vector.png"; 
import "../styles/Logo.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <span className="logo-text">K</span>
      <img src={logoHouse} alt="Kasa logo" className="logo-icon" />
      <span className="logo-text">sa</span>
    </Link>
  );
};

export default Logo;
