import React from "react";
import "./Banner.scss";

const Banner = ({ text, image }) => {
  return (
    <div className="banner">
      <div className="banner-image" style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
