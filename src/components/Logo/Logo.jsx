import React from "react";
import logo from "../../assets/KasaLogo.svg"; 
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo Kasa"  />
    </div>
  );
};

export default Logo;
