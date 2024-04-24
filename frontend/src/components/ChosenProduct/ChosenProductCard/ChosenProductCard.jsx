import React, { useState } from "react";
import Modal from "../Modal/Modal"; // Asegúrate de importar el componente Modal
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./ChosenProductCard.css";

const ChosenProductCard = ({ productData, setQuantity }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [isIngredientsModalOpen, setIngredientsModalOpen] = useState(false);
  const [isClarificationsModalOpen, setClarificationsModalOpen] =
    useState(false);
  const [clarifications, setClarifications] = useState("");

  const handleOnQuantityChange = (value) => {
    const sum = productQuantity + value;
    if (sum <= 0) return;
    setProductQuantity(sum);
    setQuantity(sum);
  };

  const handleOpenIngredientsModal = () => {
    setIngredientsModalOpen(true);
  };

  const handleCloseIngredientsModal = () => {
    setIngredientsModalOpen(false);
  };

  const handleOpenClarificationsModal = () => {
    setClarificationsModalOpen(true);
  };

  const handleCloseClarificationsModal = () => {
    setClarificationsModalOpen(false);
  };

  return (
    <li className="cardInfoFood">
      <section className="infoFood">
        <article className="imageFood child4">
          <img
            src={productData.productImageUrl}
            alt="Imagen del producto"
          />
        </article>
        <article className="nameFood child5">
          <h2 className="productNameFood">{productData.name}</h2>
          <h2 className="categoryFood">{productData.category.name}</h2>
        </article>
        <article className="nameFood child6 trashIcon">
          <FontAwesomeIcon
            className="pointer"
            icon={faTrashCan}
          />
        </article>
      </section>
      <div className="rowBtns">
        <input
          className="btnIngredients btnsReset"
          type="button"
          value="Ingredientes"
          onClick={handleOpenIngredientsModal}
        />
        <input
          className="btnClarifications btnsReset"
          type="button"
          value="Aclaraciones"
          onClick={handleOpenClarificationsModal}
        />
      </div>
      <div className="rowBtns">
        <div className="counter">
          <input
            className="btnLess btnsReset"
            type="button"
            value="-"
            onClick={() => handleOnQuantityChange(-1)}
          />
          <input
            className="count btnsReset"
            type="button"
            value={productQuantity}
          />
          <input
            className="btnMore btnsReset"
            type="button"
            value="+"
            onClick={() => handleOnQuantityChange(1)}
          />
        </div>
        <div className="price">
          <span className="dollar-sign">$</span>
          {productData.price * productQuantity}
        </div>
      </div>
      <Modal
        isOpen={isIngredientsModalOpen}
        onClose={handleCloseIngredientsModal}
      >
        <h2 className="modalTitulo">Ingredientes</h2>
        <p className="modalIngredientes">{productData.ingredients}</p>
      </Modal>
      <Modal
        isOpen={isClarificationsModalOpen}
        onClose={handleCloseClarificationsModal}
      >
        <h2 className="modalTitulo">Aclaraciones</h2>
        <input
          type="text"
          value={clarifications}
          onChange={(e) => setClarifications(e.target.value)}
          placeholder="Añade tus aclaraciones aquí"
          className="clarificationsInput"
        />
      </Modal>
    </li>
  );
};

export default ChosenProductCard;
