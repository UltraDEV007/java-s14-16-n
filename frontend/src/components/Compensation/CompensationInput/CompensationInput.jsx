import "./CompensationInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CompensationInput({ item , checked}) {

  return (
    <li className={item.border && 'card-border'}>
      <label htmlFor="food-type">
        {item.description}
      </label>
      <input type="checkbox" onChange={checked}/>
    </li>
  );
}
