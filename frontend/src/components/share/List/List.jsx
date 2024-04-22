import React, { useState } from "react";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const List = ({ children }) => {
    const [isListOpen, setListOpen] = useState(true)

    const handleOnTitleClick = () => {
        setListOpen(!isListOpen)
    }

  return (
    <section className="products-list">
      <div onClick={() => handleOnTitleClick()}>
        <FontAwesomeIcon className={!isListOpen ? 'icon-up': ''} icon={faAngleDown} />
        <h4>Lista de pedido</h4>
        <FontAwesomeIcon className={!isListOpen ? 'icon-up': ''} icon={faAngleDown} />
      </div>
      <ul>{children}</ul>
    </section>
  );
};

export default List;
