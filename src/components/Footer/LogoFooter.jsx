import React from "react";
import whiteK from "../../assets/Logo-footer/k.svg";
import footerHouse from "../../assets/Logo-footer/house.svg";
import footerDoor from "../../assets/Logo-footer/door.svg";
import whiteS from "../../assets/Logo-footer/s.svg";
import whiteA from "../../assets/Logo-footer/a.svg";
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
