import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <Logo />
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Accueil
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          À propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
