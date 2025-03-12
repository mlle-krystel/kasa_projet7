import React from "react";
import bannerImage from "../assets/banner.png"; 
import "../styles/Banner.scss";

const Banner = ({ text }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
