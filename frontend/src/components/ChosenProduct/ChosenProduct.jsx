import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context/AppContex";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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
    console.log("hice clic en confirmar");
  };

  const handleBackToMenu = () => {
    setGoToMenu(true);
  };

  if (confirmOrder) {
    return <Navigate to={"/busqueda/pagar/confirmar"} />;
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
          alt="imagen Pizzeria"
        />
        <p>{selectedProductData.storeId.address}</p>
        <p>
          30 minutos luego del pago
          <FontAwesomeIcon
            className="sizeUp pointer"
            icon={faUpRightFromSquare}
          />
        </p>
      </section>
      <section className="infoFood">
        <article className="nameFood">
          <h2>{selectedProductData.name}</h2>
          <h2>$ {selectedProductData.price}</h2>
        </article>
        <article className="imageFood">
          <img
            src={selectedProductData.productImageUrl}
            alt="imagen comida"
          />
        </article>
      </section>
      <h4>Ingredientes: {selectedProductData.ingredients}</h4>
      <div className="row">
        <p>Aclaraciones</p>
        <input
          className="inputText"
          type="text"
        />
      </div>
      <div className="rowBtns">
        <input
          className="MyButton"
          type="button"
          value="+ - 1"
        />
        <input
          className="btnAdd"
          type="button"
          value="Agregar"
        />
      </div>
      <div className="columnBtns">
        <h2>¿Quieres sumar algo más?</h2>
        <input
          className="btnMenu"
          type="button"
          value="Ver más menus"
          onClick={handleBackToMenu}
        />
        <input
          className="btnConfirm"
          type="button"
          value="Confirmar"
          onClick={handleConfirmar}
        />
      </div>
    </main>
  );
};

export default ChosenProduct;
