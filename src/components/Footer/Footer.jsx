import React from "react";
import "./Footer.scss";
import LogoFooter from "./LogoFooter";

const Footer = () => {
  return (
    <footer className="footer">
    <LogoFooter />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
