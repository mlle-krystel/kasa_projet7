import React from "react";
import { Link } from "react-router-dom"; // ✅ Import de Link pour la navigation interne
import Logo from "./Logo";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav>
        <Link to="/">Accueil</Link> {/* ✅ Utilisation correcte de Link */}
        <Link to="/about">À propos</Link> {/* ✅ Correction ici */}
      </nav>
    </header>
  );
};

export default Header;
