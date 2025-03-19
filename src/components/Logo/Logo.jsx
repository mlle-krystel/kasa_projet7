import React from "react";
import K from "../../assets/K.png";
import house from "../../assets/house.png";
import door from "../../assets/door.png";
import S from "../../assets/S.png";
import A from "../../assets/A.png";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={K} alt="K" className="firstLetter" />
      <div className="logo-container">
        <img src={house} alt="House" className="logo-house" />
        <img src={door} alt="Door" className="logo-door" />
      </div>
      <img src={S} alt="S" className="s-letter" />
      <img src={A} alt="A" className="a-letter" />
    </div>
  );
};

export default Logo;
