import { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button onClick={() => setIsOpen(!isOpen)} className="collapse-button">
        {title}
        <span className={`arrow-collapse ${isOpen ? "open-collapse" : ""}`}>❮</span>
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
