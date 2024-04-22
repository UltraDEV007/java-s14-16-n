import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context/AppContex";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faAngleDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./ChosenProduct.css";
import Spinner from "../share/Spinner/Spinner";
import List from "../share/List/List";
import ChosenProductCard from "./ChosenProductCard/ChosenProductCard";

const ChosenProduct = () => {
  const { selectedProduct, dataProducts, loading } = useContext(AppContext);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [goToMenu, setGoToMenu] = useState(false);
  const [productData, setProductData] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    if (!loading && selectedProduct) {
      const product = dataProducts.find(
        (item) => item.productId === selectedProduct
      );
      setProductData(product);
    }
  }, [selectedProduct, dataProducts, loading]);

  const handleConfirmar = () => {
    setConfirmOrder(true);
  };

  const handleBackToMenu = () => {
    setGoToMenu(true);
  };

  /* const handleOnQuantityChange = (value) => {
    if (productQuantity + value <= 0) return;
    setProductQuantity(productQuantity + value);
  }; */

  if (confirmOrder) {
    return <Navigate to="../confirmar" state={{ productData }} />;
  }

  if (goToMenu) {
    return <Navigate to="/inicio" />;
  }

  if (loading || !productData) {
    return <Spinner msg="Cargando datos del producto..." />;
  }

  return (
    <main className="mainWrapper">
      <section className="infoRestaurant">
        <img
          className="imageRestaurant"
          src={productData.store.storeImageUrl}
          alt={productData.store.name}
        />
        <section className="infoStore">
          <div className="child1">
            <img
              className="storeLogo"
              src={productData.store.storeImageUrl}
              alt={productData.store.name}
            />
          </div>
          <div className="child2">
            <p className="storeName">{productData.store.name}</p>
            <p className="storeAddres">{productData.store.address}</p>
          </div>
          <div className="child3 storeIcon pointer">
            <FontAwesomeIcon icon={faShop} />
          </div>
        </section>
      </section>

      {/* <div className="wrapperInfoFood">
        <div className="listTitle">
          <FontAwesomeIcon className="pointer" icon={faAngleDown} />
          <h4>Lista del pedido</h4>
          <FontAwesomeIcon className="pointer" icon={faAngleDown} />
        </div>
        <div className="cardInfoFood">
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
        </div>
      </div> */}

      <div className="content">
        <List>
          <ChosenProductCard
            productData={productData}
            setQuantity={(value) => setProductQuantity(value)}
          />
        </List>

        <section className="columnBtns">
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
        </section>
      </div>
    </main>
  );
};

export default ChosenProduct;
