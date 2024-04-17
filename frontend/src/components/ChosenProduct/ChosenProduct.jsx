import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context/AppContex";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faAngleDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./ChosenProduct.css";

const ChosenProduct = () => {
  const { selectedProduct, dataProducts } = useContext(AppContext);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [goToMenu, setGoToMenu] = useState(false);
  const [selectedProductData, setSelectedProductData] = useState(null);

  useEffect(() => {
    // Buscar el producto correspondiente usando el ID del producto seleccionado
    if (selectedProduct) {
      const product = dataProducts.find(
        (item) => item.productId === selectedProduct
      );
      setSelectedProductData(product);
    }
  }, [selectedProduct, dataProducts]);

  const handleConfirmar = () => {
    setConfirmOrder(true);
  };

  const handleBackToMenu = () => {
    setGoToMenu(true);
  };

  if (confirmOrder) {
    return <Navigate to={"../confirmar"} />;
  }

  if (goToMenu) {
    return <Navigate to={"/inicio"} />;
  }

  if (!selectedProductData) {
    return <p>Cargando...</p>; // O cualquier otra lógica de carga que prefieras
  }

  return (
    <main className="mainWrapper">
      <section className="infoRestaurant">
        <img
          className="imageRestaurant"
          src={selectedProductData.storeId.storeImageUrl}
          alt={selectedProductData.storeId.name}
        />
        <section className="infoStore">
          <div className="child1">
            <img
              className="storeLogo"
              src={selectedProductData.storeId.storeImageUrl}
              alt={selectedProductData.storeId.name}
            />
          </div>
          <div className="child2">
            <p className="storeName">{selectedProductData.storeId.name}</p>
            <p className="storeAddres">{selectedProductData.storeId.address}</p>
          </div>
          <div className="child3 storeIcon pointer">
            <FontAwesomeIcon icon={faShop} />
          </div>
        </section>
      </section>
      <div className="wrapperInfoFood">
        <div className="listTitle">
          <FontAwesomeIcon
            className="pointer"
            icon={faAngleDown}
          />
          <h4>Lista del pedido</h4>
          <FontAwesomeIcon
            className="pointer"
            icon={faAngleDown}
          />
        </div>
        <div className="cardInfoFood">
          <section className="infoFood">
            <article className="imageFood child4">
              <img
                src={selectedProductData.productImageUrl}
                alt="imagen comida"
              />
            </article>
            <article className="nameFood child5">
              <h2 className="productNameFood">{selectedProductData.name}</h2>
              <h2 className="categoryFood">
                {" "}
                {selectedProductData.categoryId.name}
              </h2>
            </article>
            <article className="nameFood child6 trashIcon ">
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
              />

              <input
                className="count btnsReset"
                type="button"
                value="1"
              />
              <input
                className="btnMore btnsReset"
                type="button"
                value="+"
              />
            </div>
            <div className="price">$ 15000</div>
          </div>
        </div>
      </div>

      <div className="columnBtns">
        <input
          className="btnMenu btnsReset"
          type="button"
          value="Agregar más al pedido"
          onClick={handleBackToMenu}
        />
        <input
          className="btnConfirm btnsReset"
          type="button"
          value="Confirmar"
          onClick={handleConfirmar}
        />
      </div>
    </main>
  );
};

export default ChosenProduct;
