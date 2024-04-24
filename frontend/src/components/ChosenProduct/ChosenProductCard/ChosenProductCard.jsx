import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./ChosenProductCard.css";

const ChosenProductCard = ({ productData, setQuantity }) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const handleOnQuantityChange = (value) => {
    const sum = productQuantity + value;
    if (sum <= 0) return;
    setProductQuantity(sum);
    setQuantity(sum);
  };

  return (
    <li className="cardInfoFood">
      <section className="infoFood">
        <article className="imageFood child4">
          <img src={productData.productImageUrl} alt="Imagen del producto" />
        </article>
        <article className="nameFood child5">
          <h2 className="productNameFood">{productData.name}</h2>
          <h2 className="categoryFood">{productData.category.name}</h2>
        </article>
        <article className="nameFood child6 trashIcon ">
          <FontAwesomeIcon className="pointer" icon={faTrashCan} />
        </article>
      </section>
      <div className="rowBtns">
        <input
          className="btnIngredients btnsReset"
          type="button"
          value="Ingredientes"
        />
        <input
          className="btnClarifications btnsReset"
          type="button"
          value="Aclaraciones"
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
          <span className="dollar-sign">$ </span>
          {productData.price * productQuantity}
        </div>
      </div>
    </li>
  );
};

export default ChosenProductCard;
