import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ title, children, isAbout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`collapse ${isAbout ? "collapse-about" : "collapse-logement"}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`collapse-button ${
          isAbout ? "collapse-button-about" : "collapse-button-logement"
        }`}
      >
        {title}
        <span className={`arrow-collapse ${isOpen ? "open-collapse" : ""}`}>
          ❮
        </span>
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
