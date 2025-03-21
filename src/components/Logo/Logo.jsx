import React from "react";
import K from "../../assets/k.svg";
import house from "../../assets/house.svg";
import door from "../../assets/door.svg";
import S from "../../assets/s.svg";
import A from "../../assets/a.svg";
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
