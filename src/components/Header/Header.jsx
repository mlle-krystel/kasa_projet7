import React from "react";
import { Link } from "react-router-dom"; 
import Logo from "../Logo/Logo.jsx";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
};

export default Header;
