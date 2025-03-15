import React from "react";
import whiteK from "../../assets/Logo-footer/K.png";
import footerHouse from "../../assets/Logo-footer/house.png";
import footerDoor from "../../assets/Logo-footer/door.png";
import whiteS from "../../assets/Logo-footer/s.png";
import whiteA from "../../assets/Logo-footer/a.png";
import "./LogoFooter.scss";

const LogoFooter = () => {
  return (
    <div className="logo-footer">
      <img src={whiteK} alt="K" className="first-white" />
      <div className="logo-footer-container">
        <img src={footerHouse} alt="House" className="white-house" />
        <img src={footerDoor} alt="Door" className="white-door" />
      </div>

      <img src={whiteS} alt="S" className="white-s" />
      <img src={whiteA} alt="A" className="white-a" />
    </div>
  );
};

export default LogoFooter;
