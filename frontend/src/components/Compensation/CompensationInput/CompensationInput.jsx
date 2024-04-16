import "./CompensationInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CompensationInput({ item }) {
  const [isChecked, setCheck] = useState(false);

  return (
    <li>
      <label htmlFor="food-type">
        {item.description}
        {/* <FontAwesomeIcon
          className={`checkbox-icon${isChecked ? '--active' : ''}`}
          icon={!isChecked ? faSquare : faSquareCheck}
          onClick={() => setCheck(!isChecked)}
        /> */}
      </label>
      <input type="checkbox" />
    </li>
  );
}
