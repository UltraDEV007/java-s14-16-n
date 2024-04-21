import React, { useState, useEffect } from "react";
import "./toggleButton.css";

function ToggleButton({ options }) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(false);
  const handleChange = () => {
    setSelectedOptionIndex(!selectedOptionIndex);
  };

  return (
    <section className="toggle-container">
      <span className={!selectedOptionIndex ? "bg-active-blue" : ""}>
        {options[0]}
      </span>
      <input type="checkbox" id="temp" onChange={() => handleChange()} />
      <label className='switch' htmlFor="temp"></label>
      <span className={selectedOptionIndex ? "bg-active-blue" : ""}>
        {options[1]}
      </span>
    </section>
  );
}

export default ToggleButton;
